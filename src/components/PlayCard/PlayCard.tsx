import React from "react";

import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";

import { Card, Poster, Title, Info, PlaySession, Actions } from "./styles";

import { Play } from "../../models/Play";

export interface Props {
  play: Play;
}

const PlayCard: React.FC<Props> = ({ play }) => {
  return (
    <Card>
      <div>
        <Poster bgImg={play.poster.image} /> 
        <Title>
          <h3>{play.name}</h3>
          <span>
            {play.group} - {play.state}
          </span>
        </Title>
      </div>
      <Info>
        {play.sessions.map((session, key) => (
          <PlaySession key={key}>
            <div>
              Dia {session.time.day.split("-")[0]} - {session.time.hour}
            </div>
            <div>
              <b>{session.place}</b>
            </div>
          </PlaySession>
        ))}
      </Info>
      <Actions>
        <KeyboardArrowRight size="4rem" />
      </Actions>
    </Card>
  );
};

export default PlayCard;
