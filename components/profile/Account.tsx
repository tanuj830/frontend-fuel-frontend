import React, { useState, useEffect, useRef, useReducer } from 'react'
import { Input } from '../ui/input'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '../ui/button'

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_USERNAME':
      return { ...state, username: action.payload }
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'SET_EMAIL':
      return { ...state, email: action.payload }
    case 'SET_MESSAGE':
      return { ...state, message: action.payload }
    case 'SET_MESSAGE_FAILED':
      return { ...state, messageFailed: action.payload }
    default:
      return state
  }
}

const Account = () => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    username: '',
    name: '',
    email: '',
    message: '',
    messageFailed: '',
  })

  const { user, username, name, email, message, messageFailed } = state

  const usernameRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log('Component rendered');
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (data?.user) {
        const { user_metadata } = data.user
        dispatch({ type: 'SET_USER', payload: data.user })
        dispatch({ type: 'SET_USERNAME', payload: user_metadata?.user_name || '' })
        dispatch({ type: 'SET_NAME', payload: user_metadata?.full_name || '' })
        dispatch({ type: 'SET_EMAIL', payload: user_metadata?.email || '' })
      }
    }

    getUser()
  }, [])

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus()
    }
  }, [username])

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus()
    }
  }, [name])

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }, [email])

  const handleUpdateUser = async (updateData: any) => {
    const { data, error } = await supabase.auth.updateUser(updateData)

    if (error) {
      dispatch({ type: 'SET_MESSAGE_FAILED', payload: error.message })
      dispatch({ type: 'SET_MESSAGE', payload: '' })
      setTimeout(() => dispatch({ type: 'SET_MESSAGE_FAILED', payload: '' }), 2000)
    } else {
      dispatch({ type: 'SET_MESSAGE', payload: 'User updated successfully!' })
      dispatch({ type: 'SET_MESSAGE_FAILED', payload: '' })
      setTimeout(() => dispatch({ type: 'SET_MESSAGE', payload: '' }), 2000)

      const updatedUser = data?.user
      dispatch({ type: 'SET_USER', payload: updatedUser })
      const { user_metadata } = updatedUser || {}
      dispatch({ type: 'SET_USERNAME', payload: user_metadata?.user_name || '' })
      dispatch({ type: 'SET_NAME', payload: user_metadata?.full_name || '' })
      dispatch({ type: 'SET_EMAIL', payload: user_metadata?.email || '' })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, actionType: string) => {
    dispatch({ type: actionType, payload: e.target.value })
  }

  const InputField = ({ label, placeholder, value, onChange, updateData, maxLength, ref }: any) => (
    <div className='flex flex-col gap-1 border p-5 rounded-xl'>
      <span>{label}</span>
      <small>{`Use a maximum of ${maxLength} character(s).`}</small>
      <Input
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      <div className='flex justify-end flex-col mt-1 text-xs'>
        <small className='text-muted-foreground text-end'>{value.length}/{maxLength}</small>
        <div className='flex justify-end mt-3'>
          {user?.user_metadata?.[updateData] === value ? (
            <Button size="sm" variant="secondary" disabled className='w-fit px-4 py-2 rounded-full text-xs'>
              Save changes
            </Button>
          ) : (
            <Button size="sm" className='px-4 w-fit py-2 rounded-full text-xs' onClick={() => handleUpdateUser({ data: { [updateData]: value } })}>
              Save changes
            </Button>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className='flex flex-col gap-5'>
      {messageFailed && <div className='text-red-500 text-xs'>{messageFailed}</div>}
      {message && <div className='text-green-500 text-xs'>{message}</div>}

      <InputField
        label="Fullname"
        placeholder="John Doe"
        value={name}
        onChange={(e: any) => handleInputChange(e, 'SET_NAME')}
        updateData="full_name"
        maxLength={32}
        ref={nameRef}
      />

      <InputField
        label="Username"
        placeholder="johndoe123"
        value={username}
        onChange={(e: any) => handleInputChange(e, 'SET_USERNAME')}
        updateData="user_name"
        maxLength={48}
        ref={usernameRef}
      />

      <InputField
        label="Email"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e: any) => handleInputChange(e, 'SET_EMAIL')}
        updateData="email"
        maxLength={64}
        ref={emailRef}
      />
    </div>
  )
}

export default Account
