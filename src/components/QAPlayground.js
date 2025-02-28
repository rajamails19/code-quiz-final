import React, { useState } from 'react';
import { questionsData } from '../data/questionsData';
import './qa-playground.css';

const QAPlayground = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
 
  const currentQuestion = questionsData[currentQuestionIndex];
 
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      resetQuestion();
    }
  };
 
  const handleNext = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetQuestion();
    }
  };
 
  const resetQuestion = () => {
    setUserAnswer('');
    setFeedback(null);
    setShowSolution(false);
  };
 
  const checkAnswer = () => {
    const isCorrect = userAnswer.trim() === currentQuestion.solution.trim();
    setFeedback(isCorrect);
    setShowSolution(true);
  };

  // Safely process code string to highlight missing parts
  const highlightMissingCode = (codeString) => {
    const codeLines = codeString.split('\n');
    const processedLines = codeLines.map((line, lineIndex) => {
      if (line.includes('/* Missing') && line.includes('*/')) {
        // Find the position of "/* Missing" and "*/"
        const commentStart = line.indexOf('/* Missing');
        const commentEnd = line.indexOf('*/') + 2;
        
        // Split the line into three parts: before comment, comment, after comment
        const beforeComment = line.substring(0, commentStart);
        const comment = line.substring(commentStart, commentEnd);
        const afterComment = line.substring(commentEnd);
        
        return (
          <React.Fragment key={lineIndex}>
            {beforeComment}
            <span className="missing-code">{comment}</span>
            {afterComment}
          </React.Fragment>
        );
      }
      return <React.Fragment key={lineIndex}>{line}</React.Fragment>;
    });
    
    // Join lines with line breaks
    return processedLines.flatMap((line, i) => 
      i < processedLines.length - 1 
        ? [line, <br key={`br-${i}`} />] 
        : [line]
    );
  };
 
  return (
    <div className="qa-container">
      {/* Header */}
      <div className="qa-header">
        <h1 className="qa-title">Code Playground</h1>
      </div>
     
      {/* Navigation bar */}
      <div className="nav-container">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`nav-button ${currentQuestionIndex === 0 ? 'disabled' : ''}`}
        >
          Previous
        </button>
       
        <span className="question-counter">
          Question {currentQuestionIndex + 1} of {questionsData.length}
        </span>
       
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questionsData.length - 1}
          className={`nav-button ${currentQuestionIndex === questionsData.length - 1 ? 'disabled' : ''}`}
        >
          Next
        </button>
      </div>
     
      {/* Question content */}
      <div className="question-section">
        <h2 className="question-title">{currentQuestion.title}</h2>
        
        <div className="code-container">
          <p className="question-description">{currentQuestion.description}</p>
         
          <div className="code-block">
            <pre>{highlightMissingCode(currentQuestion.code)}</pre>
          </div>
        </div>
       
        {/* Answer input section */}
        <div className="answer-section">
          <label className="answer-label">Your Answer:</label>
          <div className="answer-container">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="answer-input"
            />
          </div>
        </div>
        
        <button
          onClick={checkAnswer}
          className="check-button"
        >
          Check Answer
        </button>
       
        {/* Solution display */}
        {showSolution && (
          <div className={`solution-box ${feedback ? 'correct' : 'incorrect'}`}>
            <p className="feedback-text">
              {feedback ? 'Correct!' : 'Not quite right.'}
            </p>
           
            <div className="solution-section">
              <p className="solution-label">Solution:</p>
              <p className="solution-value">{currentQuestion.solution}</p>
            </div>
           
            <div className="explanation-section">
              <p className="explanation-label">Explanation:</p>
              <p className="explanation-value">{currentQuestion.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QAPlayground;