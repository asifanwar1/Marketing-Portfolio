import React, { useState } from 'react';
import { Outlet, Link, } from 'react-router-dom';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fade } from 'react-awesome-reveal';

const FAQs = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const questions = [
    {
      question: 'What services does your marketing agency offer?',
      answer: 'Our agency offers a comprehensive range of services including digital marketing (SEO, PPC, SMM, content marketing, email marketing), brand strategy and development, creative services (graphic design, website design, video production), marketing analytics and reporting, public relations (PR), event marketing, marketing automation, CRM, mobile marketing, and e-commerce marketing.',
    },
    {
      question: 'How does your agency approach client projects?',
      answer: ' We start by understanding our clients goals, target audience, and market landscape. We then develop tailored strategies that combine creativity, data driven insights, and industry best practices. Our collaborative approach ensures transparency, effective communication, and measurable results throughout the project lifecycle.',
    },
    {
      question: 'What sets your agency apart from others?',
      answer: 'Our agency stands out due to our innovative solutions, experienced team of experts, and commitment to delivering tangible results. We prioritize creativity, strategic thinking, and continuous optimization to drive growth and exceed client expectations. Additionally, our client-centric approach fosters long-term partnerships built on trust and mutual success.',
    },
    {
      question: 'How does your agency measure success and ROI?',
      answer: ' We use a combination of key performance indicators (KPIs), analytics tools, and performance tracking to measure the success of our campaigns and projects. Our focus is on delivering measurable results such as increased website traffic, lead generation, conversion rates, brand visibility, and ultimately, positive ROI for our clients.',
    },
    {
      question: 'Can your agency handle projects of varying sizes and industries?',
      answer: 'Yes, we have experience working with clients across different industries and project sizes, from startups to large enterprises. Our adaptable approach and industry expertise allow us to customize strategies and solutions that align with each clients unique needs, objectives, and budget.',
    },
    {
      question: 'How can we get started with your agency?',
      answer: 'Getting started with us is simple! You can reach out to us via our website contact form, email, or phone. We will schedule an initial consultation to discuss your goals, challenges, and how our agency can help. From there, we will outline a tailored strategy and proposal for your review and approval, kicking off the project once all details are confirmed.',
    },
    
  ];

  return (
    <Container id="faqs" maxWidth="md" sx={{ marginTop: '14rem', marginBottom: '2rem', textAlign:'center', color:'white'}}>
     
      <Fade cascade triggerOnce duration={500}>
      <Box sx={{display:'flex', alignItems:'center', justifyContent: 'center',}}>

        
              <Typography variant="h4" sx={{ fontWeight: '600', fontFamily:'Poppins', color:'#00c062', textTransform: 'uppercase'}}>
              FAQs
              </Typography>
              </Box>
              <br></br>
      
      <Typography variant="h2" sx={{fontFamily:'Poppins', color:'#c9c7c7'}}>
        We’ve got the answers
      </Typography>
      <br></br>
      <br></br>
      {questions.map((item, index) => (
        <Accordion
          key={index}
          expanded={selectedQuestion === index}
          onChange={() => handleQuestionClick(index)}
          sx={{ marginBottom: '1rem', backgroundColor: selectedQuestion === index ? '#212427' : 'transparent', border: selectedQuestion === index ? '1px solid #383839' : 'transparent', borderRadius:'25px', textAlign:'left'}}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
            <Typography variant="h5" sx={{fontFamily:'Inter', color:'#c9c7c7', mb:'2rem'}}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{fontFamily:'Inter', color:'#c9c7c7'}}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <br></br>
      <br></br>
      <Typography variant="h5" gutterBottom  sx={{fontFamily:'Inter',color:'#c9c7c7'}}>
        Still have more question? <Link to='/contactUs' style={{color:'#00c062', textDecoration:'none'}}>Contact Us</Link>
      </Typography>
      </Fade>
    </Container>
  );
};

export default FAQs;
