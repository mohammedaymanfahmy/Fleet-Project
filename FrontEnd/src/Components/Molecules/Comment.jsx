import React, { useContext } from "react";
import Typograph from "../Atoms/Typograph";
// import colors from "../Atoms/Colors";
import Avatar from "../Atoms/Avatar";
import Rate from "../Atoms/Rate";
import { trips } from "../../Mocks/Trips";
import { users } from "../../Mocks/Users";
import "../Styles/molecules.css";
import { FaHeart } from "react-icons/fa";
import Button from "../Atoms/Button";
import { BiCommentDetail } from "react-icons/bi";
import { ColorContext } from '../../Context/ColorContext';

export default function Comment({
  userProfile,
  comment,
  date,
  rating,
  userName,
  ...props
}) {
  const colors = useContext(ColorContext);
  return (
    <div className="comment-container">
      <div className="avatar-holder">
        <Avatar src={userProfile} alt="Avatar" size="small"></Avatar>
      </div>
      <div div className="comment-content">
        <div className="comment-header">
          <Typograph variant={"h6"} color={colors.Neutrals[2]}>
            {userName}
          </Typograph>
          <Rate rating={rating} />
        </div>
        <div className="comment-body">
          <Typograph variant={"small"} color={colors.Neutrals[4]}>
            {comment}
          </Typograph>
        </div>
        <div className="comment-footer">
          <Typograph variant={"small"} color={colors.Neutrals[4]}>
            {date}
          </Typograph>
          <Button
            color="trans"
            size="small"
            icon={<FaHeart />}
            iconcolor={colors.Neutrals[4]}
            iconSize={16}
          >
            <>
              <small>Like</small>
            </>
          </Button>
          <Button
            color="trans"
            size="small"
            icon={<BiCommentDetail />}
            iconcolor={colors.Neutrals[4]}
            iconSize={16}
          >
            <>
              <small>Reply</small>
            </>
          </Button>
        </div>
      </div>
    </div>
  );
}
