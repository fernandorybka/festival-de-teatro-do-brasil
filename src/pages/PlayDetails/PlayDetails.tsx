import React from "react";
import { useHistory, useParams } from "react-router";
import HeroTitle from "../../components/HeroTitle/HeroTitle";
import { usePlaysContext } from "../../hooks/usePlaysContext/usePlaysContext";
import { Play } from "../../models/Play/Play";
import { PageContainer } from "../../styles/PageStyles";
import PlayDetailsBody from "./components/PlayDetailsBody/PlayDetailsBody";

export interface Props {}

const PlayDetails: React.FC<Props> = () => {
  const [, , getPlay] = usePlaysContext();
  const history = useHistory();

  const { playId } = useParams<{ playId: string }>();
  const play: Play = getPlay(playId);

  if (play.status === "R") {
    history.push("/");
  }

  return (
    <PageContainer>
      {play.name && (
        <>
          <HeroTitle
            title={play.name}
            src={play.poster.image}
            caption={play.poster.caption}
            subTitle={`${play.group ? `${play.group} -` : ``} ${play.state}`}
          />
          <PlayDetailsBody play={play} />
        </>
      )}
    </PageContainer>
  );
};

export default PlayDetails;
