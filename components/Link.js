const LinkComponent = ({ route, class_name, label }) => {
  return (
    <a href={route} className={class_name}>
      {label}
    </a>
  );
};

export default LinkComponent;
