#!/bin/bash
apt-get update
apt-get install -y tesseract-ocr libtesseract-dev libleptonica-dev
export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu:$LD_LIBRARY_PATH
dotnet DotnetApi.dll