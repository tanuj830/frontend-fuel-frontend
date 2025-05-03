import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { supabase } from '@/lib/supabaseClient' // Import your supabase client

const Security = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [messageFailed, setMessageFailed] = useState('')

  const handlePasswordChange = async () => {
    if (password !== confirmPassword) {
      setMessageFailed("Passwords do not match")
      setTimeout(() => setMessageFailed(''), 3000)
      return
    }

    if (password.length < 8) {
      setMessageFailed("Password must be at least 8 characters long")
      setTimeout(() => setMessageFailed(''), 3000)
      return
    }

    // Update the user's password in Supabase
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    })

    if (error) {
      setMessageFailed(error.message)
      setMessage('')
      setTimeout(() => setMessageFailed(''), 2000)
    } else {
      setMessage('Password updated successfully!')
      setMessageFailed('')
      setTimeout(() => setMessage(''), 2000)
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-5">
        {/* Show messages */}
        {messageFailed && <div className="text-red-500 text-xs">{messageFailed}</div>}
        {message && <div className="text-green-500 text-xs">{message}</div>}

        <div>
          <div className="text-lg font-semibold">Change password</div>
          <p className="text-muted-foreground">
            If you are logged in with OAuth (e.g. GitHub), you can set a password here to use email and password to log in instead.
          </p>
        </div>

        {/* Password input */}
        <div>
          <div>* Password</div>
          <Input
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm password input */}
        <div>
          <div>* Confirm password</div>
          <Input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end flex-col mt-1 text-xs">
          <div className="flex justify-end mt-3">
            <Button
              size="sm"
              className="px-4 w-fit py-2 rounded-full text-xs"
              onClick={handlePasswordChange}
              disabled={!password || !confirmPassword || password !== confirmPassword}
            >
              Change password
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security
