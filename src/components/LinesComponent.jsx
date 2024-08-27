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
        animation: 'drop 9s infinite', 
        animationTimingFunction: 'ease-in-out', 
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
        opacity: 0, 
        animation: 'drop 9s infinite', 
        animationTimingFunction: 'ease-in-out',
      },
    };
  
    const linesCount = 12; 
  
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
                animationDelay: `${randomDelay}s`, 
              }}
            >
              <div style={{ 
                ...styles.lineAfter, 
                animationDelay: `${randomDelay}s`, 
              }} />
            </div>
          );
        })}
      </div>
    );
  };
  
  export default LinesComponent;
  