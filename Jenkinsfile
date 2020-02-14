#!groovy
node {
  wrap([$class: 'AnsiColorBuildWrapper', colorMapName: 'xterm']) {
    stage("Checkout") {
      checkout scm
    }

    stage("Cleaning and preparing") {
      sh '''#!/bin/bash -e
        git clean -dfx
        mkdir reports
      '''
    }

    stage('Build an image with webdriverio') {
        sh """
          docker-compose build webdriverio:{BUILD_NUMBER}
        """
    }

    stage('Run Docker Compose') {
        sh """#!/bin/bash -e
          docker-compose run --rm webdriverio:{BUILD_NUMBER}
        """
    }

    stage('Stop all containers') {
        sh """
          docker-compose down
        """
    }
  }
}