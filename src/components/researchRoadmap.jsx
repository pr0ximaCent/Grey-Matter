import 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const App = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(51, 51, 51)',
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(51, 51, 51)' }}
          date="Step 1"
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: '#fff' }}
          >
            Define Research Goals
          </h2>
          <h3 className="vertical-timeline-element-subtitle">Initial Phase</h3>
          <p>
            Set clear and achievable research objectives, outlining what you aim
            to achieve.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(51, 51, 51)',
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(51, 51, 51)' }}
          date="Step 2"
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: '#fff' }}
          >
            Literature Review
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Background Study
          </h3>
          <p>
            Conduct a comprehensive review of existing literature related to
            your research area.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(51, 51, 51)',
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(51, 51, 51)' }}
          date="Step 3"
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: '#fff' }}
          >
            Research Design
          </h2>
          <h3 className="vertical-timeline-element-subtitle">Methodology</h3>
          <p>
            Develop a robust research methodology that aligns with your goals
            and ensures valid results.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(51, 51, 51)',
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(51, 51, 51)' }}
          date="Step 4"
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: '#fff' }}
          >
            Data Collection
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Gathering Information
          </h3>
          <p>
            Collect data through appropriate methods, ensuring accuracy and
            relevance.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(51, 51, 51)',
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(51, 51, 51)' }}
          date="Step 5"
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: '#fff' }}
          >
            Data Analysis
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Interpreting Findings
          </h3>
          <p>
            Analyze collected data using suitable analytical techniques to draw
            meaningful conclusions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(51, 51, 51)',
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(51, 51, 51)' }}
          date="Step 6"
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: '#fff' }}
          >
            Results Presentation
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Sharing Insights
          </h3>
          <p>
            Present research findings through reports, presentations, or
            publications.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(51, 51, 51)',
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(51, 51, 51)' }}
          date="Step 7"
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: '#fff' }}
          >
            Discussion and Interpretation
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Reflecting on Results
          </h3>
          <p>
            Discuss findings, their implications, and their significance in the
            broader context.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(51, 51, 51)',
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(51, 51, 51)' }}
          date="Step 8"
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: '#fff' }}
          >
            Conclusion and Recommendations
          </h2>
          <h3 className="vertical-timeline-element-subtitle">Final Phase</h3>
          <p>
            Summarize key findings, provide recommendations, and outline future
            research directions.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default App;
