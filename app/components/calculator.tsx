'use client'

import { Label } from './ui/label'
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from './ui/select'
import { Button } from './ui/button'
import { useState } from 'react'
import { useToast } from './ui/use-toast'
import { Toaster } from './ui/toaster'
import { hexCalculate } from 'app/utils/calculations'

export default function Calculator() {

    const { toast } = useToast();

    const [first, setFirst] = useState<string>('');
    const [second, setSecond] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [type, setType] = useState<string>('');

    const [errors, setErrors] = useState<string[]>([]);

    const calculate = (type: string) => {
        if (!first) {
            return toast({
                variant: 'destructive',
                title: 'Missing first hexadecimal value',
                description: 'Select a hexadecimal value from the dropdown.',
            })
        }

        if (!second) {
            return toast({
                variant: 'destructive',
                title: 'Missing second hexadecimal value',
                description: 'Select a hexadecimal value from the dropdown.',
            })
        }

        if (!type) {
            return toast({
                variant: 'destructive',
                title: 'Missing calculation type',
                description: 'Make sure you select a button of the type of math you want to do.',
            })
        }

        setResult(hexCalculate(first, second, type) as string);

    }

    const handleTyping = (value: string) => {
        if (!type) {
            // add logic here
            // add to first
            return;
        }
    }

    const clear = () => {
        setFirst('');
        setSecond('');
        setType('');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="grid grid-cols-1 gap-4">
                    <div className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
                        Hexadecimal Calculator
                    </div>
                    <div className="grid grid-cols-4 gap-2 bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
                        <div className="col-span-4 text-right text-2xl font-bold text-gray-800 dark:text-gray-200" id="result">
                            {
                                !first && !second && <>Start pressing buttons...</>
                            }
                        </div>
                        <Button disabled={!first && true} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            +
                        </Button>
                        <Button disabled={!first && true} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            -
                        </Button>
                        <Button disabled={!first && true} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            *
                        </Button>
                        <Button disabled={!first && true} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            /
                        </Button>
                        <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            C
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <div className="grid grid-cols-4 gap-2">
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                0
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                1
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                2
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                3
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                4
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                5
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                6
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                7
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                8
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                9
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                A
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                B
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                C
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                D
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                E
                            </Button>
                            <Button className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                F
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}