import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import styled, { css } from "styled-components";
import UserGrid from "./profile/UserGrid";

// View modal gallery
export default function ModalGalleryExample() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}

const IMAGES = [
  { id: 0, title: "Photo1" },
  { id: 1, title: "Photo2" },
  { id: 2, title: "Photo3" },
  { id: 3, title: "Photo4" },
  { id: 4, title: "Photo5" },
  { id: 5, title: "Photo6" },
  { id: 6, title: "Photo7" },
  { id: 7, title: "Photo8" },
  { id: 8, title: "Photo9" },
  { id: 9, title: "Photo10" },
  { id: 10, title: "Photo11" },
  { id: 11, title: "Photo12" },
  { id: 12, title: "Photo13" },
  { id: 13, title: "Photo14" },
];

const StyledImage = styled.img`
  width: 305px;
  height: 305px;
  object-fit: cover;
  ${({ inModal }) => !inModal && css`
    :hover {
      opacity: 0.7;
    }
  `}
`;

function Image({ imageId }) {
  const image = IMAGES[parseInt(imageId, 10)];
  return image && (
    <StyledImage alt={image.title} src={`/images/pexels-photo-${image.id + 1}.jpeg`} />
  );
}

function Home() {
  return (
    <div>
      <Link to="/gallery">Visit the Gallery</Link>
      <h2>Featured Images</h2>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  margin: auto;
  margin-top: 80px;
`;

const ContainerDiv = styled.div`
  max-width: 950px;
  margin: auto;
`;

function Gallery() {
  let location = useLocation();

  return (
    <ContainerDiv>
      <UserGrid />
      <Grid>
        {IMAGES.map(i => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location }
            }}
          >
            <Image imageId={i.id} />
          </Link>
        ))}
      </Grid>
    </ContainerDiv>
  );
}

function ImageView() {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <Image imageId={id} />
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{image.title}</h1>
        <Image inModal={true} imageId={id} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}
