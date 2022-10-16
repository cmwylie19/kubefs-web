import './AppContainer.css';

export default function AppContainer(props) {
  return (
    <div>
      <container className="header-container">{props.header}</container>
      <container className="images-container">{props.images}</container>
    </div>
  );
}

