
import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import go from '../assets/svg/skills/go.svg'
import java from '../assets/svg/skills/java.svg'
import kotlin from '../assets/svg/skills/kotlin.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import aws from '../assets/svg/skills/aws.svg'
import django from '../assets/svg/skills/django.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import gimp from '../assets/svg/skills/gimp.svg'
import git from '../assets/svg/skills/git.svg'
import selenium from '../assets/svg/skills/selenium.svg'
import azure from '../assets/svg/skills/azure.svg'
import blender from '../assets/svg/skills/blender.svg'
import fastify from '../assets/svg/skills/fastify.svg'
import figma from '../assets/svg/skills/figma.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import picsart from '../assets/svg/skills/picsart.svg'
import sketch from '../assets/svg/skills/sketch.svg'
import unity from '../assets/svg/skills/unity.svg'
import canva from '../assets/svg/skills/canva.svg'
import androidstudio from '../assets/svg/skills/AndroidStudio.svg'
import advancejava from '../assets/svg/skills/AdvanceJava.svg'
import nodejs from '../assets/svg/skills/NodeJs.svg'



export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {

        case 'advancejava':
            return advancejava;
       case 'androidstudio':
            return androidstudio;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'nodejs':
            return nodejs;   
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
       
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
              case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'aws':
            return aws;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'selenium':
            return selenium;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;     
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'canva':
            return canva;
        default:
            break;
    }
}
