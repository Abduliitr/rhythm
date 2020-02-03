import React from "react";
import * as firebase from "firebase";
import Chart from "chart.js";
import { connect } from "react-redux";

class UserGameStats extends React.Component {
  componentWillMount() {
    // this.props.fetchGameStats(this.props.params.id);
  }

  componentDidMount() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Run1", "Run2", "Run3"],
        datasets: [
          {
            label: "# of Levels",
            data: [1, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(75, 192, 192, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div style={{ minHeight: "80vh" }}>
        <canvas id="myChart"></canvas>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    gameData: {
      gameName: [
        { 1580581400719: 2 },
        { 1580581422391: 3 },
        { 1580581422392: 0 },
        { 1580625721556: 0 },
        { 1580625763860: 1 }
      ]
    }
  };
};

export default connect()(UserGameStats);
