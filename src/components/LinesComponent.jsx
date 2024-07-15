const LinesComponent = () => {
    const styles = {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      html: {
        height: '100%',
      },
      body: {
        display: 'table',
        width: '100%',
        height: '100%',
        backgroundColor: '#171717',
        color: '#000',
        lineHeight: 1.6,
        position: 'relative',
        fontFamily: 'sans-serif',
        overflow: 'hidden',
      },
      lines: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        margin: 'auto',
        width: '90vw',
      },
      line: {
        position: 'absolute',
        width: '1px',
        height: '100%',
        top: 0,
        left: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        animation: 'drop 9s infinite', // Duration set to 4s
        animationTimingFunction: 'ease-in-out', // Smooth the animation
      },
      lineAfter: {
        content: "''",
        display: 'block',
        position: 'absolute',
        height: '15vh',
        width: '100%',
        top: '-50%',
        left: 0,
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0) 100%)',
        opacity: 0, // Initially hidden
        animation: 'drop 9s infinite', // Duration set to 4s, same as line
        animationTimingFunction: 'ease-in-out', // Smooth the animation
      },
    };
  
    const linesCount = 12; // Total number of meteors
  
    return (
      <div style={styles.lines}>
        {Array.from({ length: linesCount }).map((_, index) => {
          const randomDelay = Math.random() * 5; 
          return (
            <div 
              key={index} 
              style={{ 
                ...styles.line, 
                marginLeft: `${(index - 5) * 10}%`, 
                animationDelay: `${randomDelay}s`, // Random delay for each line
              }}
            >
              <div style={{ 
                ...styles.lineAfter, 
                animationDelay: `${randomDelay}s`, // Sync tail delay with line
              }} />
            </div>
          );
        })}
      </div>
    );
  };
  
  export default LinesComponent;
  