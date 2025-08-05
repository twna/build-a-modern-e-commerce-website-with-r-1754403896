# .github/workflows/deploy.yml
name: Deploy to AWS Elastic Beanstalk
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Setup Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.8'

    - name: Install dependencies
      run: |
        pip install awsebcli
        pip install -r requirements.txt

    - name: Zip application files
      run: zip -r my-application.zip .

    - name: Deploy to AWS Elastic Beanstalk
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        AWS_REGION: 'us-west-2'
      run: |
        eb init -p python-3.8 my-application --region $AWS_REGION
        eb use my-env
        eb deploy
{
  "checklist": [
    {
      "item": "Set up cloud environment",
      "completed": true
    },
    {
      "item": "Configure deployment settings",
      "completed": true
    },
    {
      "item": "Package application files",
      "completed": true
    },
    {
      "item": "Deploy application to cloud service",
      "completed": true
    }
  ]
}