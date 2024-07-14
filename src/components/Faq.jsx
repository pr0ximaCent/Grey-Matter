import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 rounded-lg shadow-md" style={{ marginTop: '10px' }}>
      <div
        className="px-4 py-2 cursor-pointer rounded-t-lg flex justify-between items-center"
        style={{
          background: '#242d45',
          color: '#fff',
          boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          height: '60px',
        }}
        onClick={toggleOpen}
      >
        {question}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && (
        <div
          className="px-4 py-2 rounded-b-lg"
          style={{
            background: '#fff',
            color: '#242d45',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: 'What is the purpose of research?',
      answer:
        'Research aims to generate new knowledge, solve specific problems, and contribute to the overall understanding of a particular field.',
    },
    {
      question: 'How do I start a research project?',
      answer:
        'Start by identifying a research question or problem, conduct a literature review, and develop a research proposal outlining your methodology and objectives.',
    },
    {
      question: 'What are the key components of a research proposal?',
      answer:
        'A research proposal typically includes an introduction, literature review, research methodology, expected outcomes, and a timeline.',
    },
    {
      question: 'How do I choose a research topic?',
      answer:
        'Choose a topic that interests you, is feasible to research, and has available resources and literature to support your study.',
    },
    {
      question: 'What methods can I use for data collection?',
      answer:
        'Common data collection methods include surveys, interviews, experiments, observations, and secondary data analysis.',
    },
    {
      question: 'How do I analyze my research data?',
      answer:
        'Data analysis methods vary based on the type of data. Quantitative data can be analyzed using statistical methods, while qualitative data is often analyzed through thematic analysis or content analysis.',
    },
    {
      question: 'How do I present my research findings?',
      answer:
        'Present your findings through research papers, presentations, reports, or at conferences. Use clear visuals, concise language, and logical structure.',
    },
    {
      question: 'What is the importance of a literature review?',
      answer:
        'A literature review provides context for your research, identifies gaps in existing knowledge, and helps refine your research question and methodology.',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2
        className="text-2xl font-semibold text-center mb-6 text-white"
        style={{ marginTop: '100px' }}
      >
        Frequently Asked Questions
      </h2>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;
