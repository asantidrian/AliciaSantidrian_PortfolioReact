import React from 'react';
import Project from '../Project';
import justKiddingImg from '../../images/justKidding.jpg'
import marvelTubeImg from '../../images/MarvelTube.jpg'
import weatherImg from '../../images/WeatherDashboard.jpg'
import noteImg from '../../images/NoteTaker.jpg'
import quizImg from '../../images/Code-Quiz.jpg'

const projects = [
    {
        title: 'JustKiDding',
        description: 'Parents Social Network & Marketplace',
        deployedURL: 'https://just-kidding-baby.herokuapp.com/',
        githubURL: 'https://gitqqx                                                                                                      21a 1`hub.com/asantidrian/just-kidding',
        srcImg: justKiddingImg
    },
    {
        title: 'MarvelTube',
        description: 'Comic Marvel Character Search app',
        deployedURL: 'https://amiresf1983.github.io/MarvelTube/',
        githubURL: 'https://github.com/asantidrian/MarvelTube',
        srcImg: marvelTubeImg
    },
    {
        title: 'City Weather Dashboard',
        description: 'Weather Forecast app',
        deployedURL: 'https://asantidrian.github.io/ACityWeatherDashboard/',
        githubURL: 'https://github.com/asantidrian/ACityWeatherDashboard',
        srcImg: weatherImg
    },
    {
        title: 'Note Taker',
        description: 'Note take app',
        deployedURL: 'https://glacial-cove-00869.herokuapp.com/',
        githubURL: 'https://github.com/asantidrian/ASNoteTaker',
        srcImg: noteImg
    },
    {
        title: 'Code Quiz',
        description: 'JavaScript Code Quiz',
        deployedURL: 'https://asantidrian.github.io/ACodeQuiz/',
        githubURL: 'https://github.com/asantidrian/ACodeQuiz',
        srcImg: quizImg
    }

];

export default function Portfolio() {
    return <Project projects={projects} />;
}

