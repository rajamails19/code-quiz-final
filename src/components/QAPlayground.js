import React, { useState, useEffect } from 'react';
import { questionsData } from '../data/questionsData';
import './qa-playground.css';

const QAPlayground = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
 
  const currentQuestion = questionsData[currentQuestionIndex];

  // Check screen size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set up keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Enter key to check answer
      if (e.key === 'Enter' && !showSolution) {
        checkAnswer();
      }
      
      // Left arrow for previous question
      if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        handlePrevious();
      }
      
      // Right arrow for next question
      if (e.key === 'ArrowRight' && currentQuestionIndex < questionsData.length - 1) {
        handleNext();
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentQuestionIndex, showSolution, userAnswer]); // Dependencies

  // Toggle theme and update document class for CSS
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
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
    <div className={`qa-container ${isDarkMode ? 'dark-theme' : ''}`}>
      {/* Header */}
      <div className="qa-header">
        <h1 className="qa-title">Code Playground</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
     
      {/* Navigation bar */}
      <div className="nav-container">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`nav-button ${currentQuestionIndex === 0 ? 'disabled' : ''}`}
        >
          {isMobile ? '←' : 'Previous'}
        </button>
       
        <span className="question-counter">
          Question {currentQuestionIndex + 1} of {questionsData.length}
        </span>
       
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questionsData.length - 1}
          className={`nav-button ${currentQuestionIndex === questionsData.length - 1 ? 'disabled' : ''}`}
        >
          {isMobile ? '→' : 'Next'}
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
              placeholder={isMobile ? "Type answer here" : "Type your answer here (press Enter to check)"}
            />
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={checkAnswer}
            className="check-button"
          >
            Check Answer
          </button>
        </div>
       
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
        
        {/* Keyboard shortcuts help */}
        <div className="keyboard-shortcuts">
          {isMobile ? (
            <p>
              <span>← Previous | → Next</span>
              <span>Enter to Check Answer</span>
            </p>
          ) : (
            <p>Keyboard shortcuts: ⬅️ Previous | ➡️ Next | Enter to Check Answer</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QAPlayground;