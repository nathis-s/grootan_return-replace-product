import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import '../../App.css'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'times',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0f4d4a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your name, to fetch your Account deatils?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi,{previousValue} I am ChatBot, created for Grootan What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Return an Item', trigger: '3' },
                { value: 2, label: 'Replace an Item', trigger: '4' },
              ],
            },
            {
              id: '3',
              message:
                'Which item do you want to Return?',
              trigger: 'return_order',
            },
            {
              id: '4',
              message:
                'Which item do you want to Replace?',
              trigger: 'replace_order',
            },

            {
              id:'replace_order',
              message: 'Select the Products from the list, you want to relace',
              trigger: 'replace_products'
            },
            
            {
              id:'return_order',
              message: 'Select the Products from the list, you want to return',
              trigger: 'return_products'
            },
            {
              id: 'replace_products',
              options: [
                { value: 1, label: 'Mobile', trigger: 'success_replace' },
                { value: 2, label: 'Smart Watch', trigger: 'success_replace' },
                { value: 3, label: 'Headphones', trigger: 'success_replace' },
                { value: 4, label: 'Keyboard', trigger: 'success_replace' },
                { value: 5, label: 'Mouse', trigger: 'success_replace' },
              ],
            },

            {
              id: 'return_products',
              options: [
                { value: 1, label: 'Mobile', trigger: 'success' },
                { value: 2, label: 'Smart Watch', trigger: 'success' },
                { value: 3, label: 'Headphones', trigger: 'success' },
                { value: 4, label: 'Keyboard', trigger: 'success' },
                { value: 5, label: 'Mouse', trigger: 'success' },
              ],
            },

            {
              id:'success',
              message: 'Your request has been successfully processed, You will recieve the Refund within 5 working Days',
              trigger:'end_credits'
            },

            {
              id:'success_replace',
              message: 'Your request has been successfully processed, You will recieve the replacement product to your registered Address, within 5 working days',
              trigger:'end_credits'
            },

            {
              id:'end_credits',
              message:"Thank you for using Grootan chatbot"
            },


            {
              id: '5',
              message:
                'An election is a way people can choose their candidate or their preferences in a representative democracy or other form of government',
              trigger: 'qtype',
            },
            {
              id: '6',
              component: <Link />,
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'Property Tax ?', trigger: '4' },
                { value: 2, label: ' Professional Tax ?', trigger: '3' },
                { value: 3, label: 'Election Department', trigger: '5' },
                { value: 4, label: 'More Information', trigger: '6' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
