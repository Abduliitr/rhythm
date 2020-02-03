import React from "react";
import { connect } from "react-redux";
import { fetchUserDetails } from "../actions";
import GameCard from "./GameCard";
import {Link } from "react-router-dom"

class UserGameHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    const userGames = ["game1", "game2", "game3"];
    this.props.fetchUserDetails(this.props.user.uid);
    this.setState({ games: userGames });
  }
  componentWillReceiveProps(nextProps) {
    this.props.fetchUserDetails(this.props.user.uid);
    // this.setState({ games: userGames });
  }

  render() {
    console.log(this.props.user);
    return (
      <div className="ui three column stackable grid container" 
            style={{
              // minHeight: "90vh",
              display:"flex" 
            }}
      >
        {this.state.games.map((game,index) => {
          return (
          <Link to={`/user/games/${index}`} style={{ borderRadius:"20%"}} className=" ui basic button">
          <GameCard name={game} />;
          </Link>)
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {
  fetchUserDetails
})(UserGameHistory);
