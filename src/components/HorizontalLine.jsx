
const HorizontalLine = () => {
  const lineStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: 'white',
    margin: '0',
    padding: '0',
    border: 'none'
  };

  return (
    <div className="text-n-2">
      <div style={lineStyle}></div>
    </div>
  );
};

export default HorizontalLine;
