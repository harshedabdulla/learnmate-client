import React from 'react';
import Navbar from './NavBar';

const Sortedpyq = () => {
  const questions = [
    'Differentiate between decimal numbers and binary numbers.',
    'Convert the binary number 101010 to octal and hexadecimal.',
    'Explain the concept of compliments in digital systems.',
    'Perform the operation of finding the 2\'s complement for the binary number 011001.',
    'Discuss the concept of signed binary numbers.',
    'Define binary codes and provide some examples.',
    'Compare and contrast binary storage and registers.',
    'Explain the use of binary logic in digital systems.',
    'Describe the axiomatic definition of boolean algebra.',
    'State and prove the basic theorems and properties of boolean algebra.',
    'Define boolean functions and give some examples.',
    'Differentiate between canonical and standard forms of boolean functions.',
    'Perform logic operations using boolean algebra.',
    'Introduce the concept of digital logic gates.',
    'Use Karnaugh map to perform gate level minimisation.',
    'Simplify the boolean expression using two-variable Karnaugh map.',
    'Explore the methods of simplification using three, four, and five variable Karnaugh maps.',
    'Explain the concept of Product of Sums and Sum of Products simplification.',
    'Discuss the implementation of NAND and NOR gates.',
    'Introduce the Exclusive OR function and its applications.',
    'Apply the Quine McCluskey technique for simplification.',
  ];

  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex flex-col items-center w-screen bg-gradient-to-tr from-violet-700 via-green-600 to-green-400 mt-3">
        <h1 className="text-3xl text-white font-bold mb-4 mt-4">Sorted PYQ</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-semibold">{`${index + 1}. ${question}`}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sortedpyq;
