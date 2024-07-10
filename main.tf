variable "stack_name" {
  description = "The name of the CloudFormation stack, used to name the S3 bucket."
  type        = string
}

variable "domain_name" {
  description = "The domain name for the hosted zone."
  type        = string
}

provider "aws" {
  region = "ap-east-1"
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = var.domain_name
}

resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_public_access_block" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id

  block_public_acls   = false
  block_public_policy = false
  ignore_public_acls  = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.website_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::${var.domain_name}/*"
      }
    ]
  })
}

output "website_url" {
  description = "URL of the S3 bucket static website"
  value       = aws_s3_bucket_website_configuration.website_config.website_endpoint
}

output "bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.website_bucket.id
}
