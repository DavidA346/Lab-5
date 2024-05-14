import React, { useEffect, useState } from 'react';
import './Articles.css'

/*const url = 'https://api.nytimes.com/svc/mostpopular/v2/';
var sortOption = '';
var timeOption = '';
const apiKey = '.json?api-key=WOurXSGPYOGvLJy2DjGirkxRrWDZnYgP';

const getArticles = async () => {
    var mostFilter = document.getElementsByName('sort-type');
    for (let i = 0; i < mostFilter.length; i++) {
        if (i == 0 && mostFilter[i].checked) {
            sortOption = 'viewed'; 
            console.log("Most option = " + sortOption);
        }
        else if (i == 1 && mostFilter[i].checked) {
            sortOption = 'shared'; 
            console.log("Most option = " + sortOption);
        }
        else if (i == 2 && mostFilter[i].checked) {
            sortOption = 'emailed'; 
            console.log("Most option = " + sortOption);
        }
    }

    var timeFilter = document.getElementsByName('time-type');
    for (let j = 0; j < timeFilter.length; j++) {
        if (j == 0 && timeFilter[j].checked){
            timeOption = '/1';
            console.log("Time option = " + timeOption);
        }
        else if (j == 1 && timeFilter[j].checked){
            timeOption = '/7';
            console.log("Time option = " + timeOption);
        }
        else if (j == 2 && timeFilter[j].checked){
            timeOption = '/30';
            console.log("Time option = " + timeOption);
        }
    }
    console.log(url);
    console.log(sortOption);
    console.log(timeOption);
    console.log(apiKey);
    var filterURL = url + sortOption + timeOption + apiKey;
    console.log(filterURL);

    try {
        const response = await fetch(filterURL);
        const data = await response.json();
        console.log(data); // you can view if a response went through in developer mode. 

        //setArticles(data.results); // it should at most display 15 articles

    } catch (error) {
        console.error('Error fetching articles:', error);
    }
};*/

const Articles = () => {
    //getArticles();

  return (
    <div className="news-container">

            <div className="card" id="0-card">
                <div className="card-top-content">
                    <div className="card-title" id="0-card-title"></div>
                    <div className="card-date" id="0-card-date"></div>
                </div>
                <div className="card-bottom-content">
                    <div className="card-image" id="0-card-image"></div>
                    <div className="card-text" id="0-card-text"></div>
                </div>
            </div>

            <div className="card" id="1-card">
                <div className="card-top-content">
                    <div className="card-title" id="1-card-title"></div>
                    <div className="card-date" id="1-card-date"></div>
                </div>
                <div className="card-bottom-content">
                    <div className="card-image" id="1-card-image"></div>
                    <div className="card-text" id="1-card-text"></div>
                </div>
            </div>

            <div className="card" id="2-card">
                <div className="card-top-content">
                    <div className="card-title" id="2-card-title"></div>
                    <div className="card-date" id="2-card-date"></div>
                </div>
                <div className="card-bottom-content">
                    <div className="card-image" id="2-card-image"></div>
                    <div className="card-text" id="2-card-text"></div>
                </div>
            </div>
        </div>
  )
}

export default Articles
