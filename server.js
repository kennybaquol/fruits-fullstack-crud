/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config()
const express = require("express")
const morgan = require('morgan')
const methodOverride = require('method-override')
const req = require('express/lib/request')
const mongoose = require('mongoose')
const path = require('path')