var router = require('express').Router()
const express = require('express')
const path = require('path')

console.log(__dirname)
router.use(express.static(path.join(__dirname, 'html')))

module.exports = router;
