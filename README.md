# Datadromm - Microservice

[![Build Status](https://travis-ci.org/videodromm/datadromm-microservice.svg?branch=master)](https://travis-ci.org/videodromm/datadromm-microservice)
[![codecov](https://codecov.io/gh/videodromm/datadromm-microservice/branch/master/graph/badge.svg)](https://codecov.io/gh/videodromm/datadromm-microservice)


## Purpose

Within the scope of videodromm we want to achieve a way to easily add, edit and retrieve shader files from anywhere.

## Goals

	- REST api microservice
	- Persistence management (mongodb through mongoose)
	- Consistent and well tested microservice
	- Improve our knowledge in NodeJS
	- TDD
	- Distributed remote working
	- Get an MVP ASAP

## Pdf

A REST api that will handle requests from clients:

	- Add a new shader to database
	- Update a current shader
	- Remove a shader
	- Error handling for all 3 points above
	- Unit testing / Functional testing / End-2-End
	- Easily deployment (dockerfile)
	- Easily scaling (multiple microservice instances)

## Arch

For the REST api:

	- We'll use express

For the MongoDB persistence:

	- We'll choose mongoose, despite of some paybacks at long term, for the first iteration will be fastest

For testing:

	- We'll use mocha / chai / supertest
	- Test coverage with istambul

For deployment:

	- Docker

For tasks:

	- Gulp


