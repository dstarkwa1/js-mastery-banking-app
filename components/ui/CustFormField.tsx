'use client'


import React, { useState } from 'react'
import { z } from "zod"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

interface CustomInput {
  control: Control<z.infer<typeof authFormSchema>>,
  name: FieldPath<z.infer<typeof authFormSchema>>,
  label: string,
  placeholder: string
}

const CustFormField = ({control, name, label, placeholder}: CustomInput) => {
  return (
              <FormField
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <div className='form-item'>
                            <FormLabel className='form-label'>
                                {label}
                            </FormLabel>
                            <div className='flex w-full flex-col'>
                                <FormControl>
                                    <Input 
                                    className='input-class'
                                    placeholder={placeholder}
                                    type={name==='password'?'password':'text'}
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage className="form-message mt-2" />
                            </div>
                        </div>
                    )}
                    />
  )
}

export default CustFormField

