import Head from 'next/head'
import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

const StyledInput = styled.input`
  :focus {
    outline: none;
  }
  background:#F9FBFF;
  border-radius:5px;
`;

const Heading = styled.h1`
  font-size:35px;
  line-height:35px;
  font-weight:800;
  padding-bottom:1.5rem;
`
const P = styled.p`
font-weight: normal;
font-size: 20px;
line-height: 30px;
`
const Bg = styled.div`
background: #E5E5E5;
display:flex;
align-items:center;
justify-content:center;
`
const Modal = styled.div`
  display:flex;
  flex-direction:column;
  border-radius:15px;
  background:white;
  padding:25px;
  width:400px;
  @media (max-width: 768px) {
    margin-top:3rem;
    margin-bottom:3rem;
  }
`
const Sign = styled.p`
font-weight: 800;
font-size: 27px;
line-height: 27px;
padding-right:20px;
`
const StyledButton = styled.button`
  background:blue;
  color:white;
  padding:10px;
  border-radius:15px;
  margin-top:1.5rem;
`

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="md:grid md:grid-cols-3 h-full">
          <div className="col-span-1 relative  justify-center items-center h-2/3 md:h-full">
          <Image
                   src="/original1.png"
                    alt="test"
                    layout="fill"
                  />
                  <div className="container mx-auto w-10/12">
                <div className="pt-20 pl-5 pb-28">
                  <Image src="/logo1.png" alt="logo" width="170px" height="60px"/>
                </div>
                <Heading>AI for the government</Heading>
                <P>The latest private-sector technology for your agency’s unique data management, workflows, and readiness needs.  </P>
                  </div>
          </div>
            <Bg className="col-span-2 flex flex-col">
              <div className="pb-4">
              <p>Don't have an account? <span className="text-blue-700"> Sign up</span></p>
              </div>
                  <Modal>
                      <div className="flex flex-row items-center pb-10 justify-between">
                          <Sign>Sign in</Sign>
                          <img src="/logo2.png" alt="logo2"/>
                      </div>
                      <label
                        className="text-primary md:text-base tracking-widest font-hind font-bold"
                        htmlFor="last_name"
                       >
                       Email
                      </label>
                <StyledInput
                  name="email"
                  className="border-2 mt-3 p-2 border-gray  outline-none placeholder-gray focus:placeholder-primary text-base"
                  type="text"
                  placeholder="Enter your email"
                  id="email"
                />
                     <label
                      className=" mt-4 text-primary md:text-base tracking-widest font-hind font-bold"
                      htmlFor="last_name"
                      >
                       Password
                      </label>
                <StyledInput
                  name="password"
                  className="border-2 mt-3 p-2 border-gray  outline-none placeholder-gray focus:placeholder-primary text-base"
                  type="text"
                  placeholder="Enter your password"
                  id="password"
                />
                <StyledButton>Sign in</StyledButton>
                  </Modal>
                  <p className="text-blue-700 mt-4 cursor-pointer">Forgot your password?</p>
            </Bg>
        </div>
     
    </div>
  )
}
