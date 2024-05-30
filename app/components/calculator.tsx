'use client'

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

    const calculate = () => {
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

        try {

            let newSecond = second;
            if (newSecond.startsWith('(') && newSecond.endsWith(')')) {
                newSecond = newSecond.slice(1, -1);
            }

            console.log(newSecond);

            const answer = hexCalculate(first, newSecond, type) as string;
            setResult(answer);
        } catch (e) {
            toast({
                variant: 'destructive',
                title: 'Calculation Error',
                description: `${(e as Error).message}`,
            })
        }

    }

    const handleTyping = (value: string) => {

        if (result) {
            return toast({
                variant: 'destructive',
                title: 'CLEARRRRRRRRRRRRR',
                description: 'You first need to clear.',
            })
        }

        if (!type) {
            if ((first.startsWith('-') && first.length === 4) || first.length === 3) return toast({
                variant: 'destructive',
                title: 'Input Error',
                description: 'You cannot have more than 3 digits.',
            })
            setFirst(first + value);
            return;
        }

        if (type && first) {

            if (value === '(') {
                setSecond('(');
                return;
            }

            if (second.startsWith('(')) {
                if (second.startsWith('(-')) {
                    // negative shit
                    if (second.endsWith(')') && second.length === 6) {
                        return toast({
                            variant: 'destructive',
                            title: 'Input Error',
                            description: 'You cannot have more than 3 digits.',
                        })
                    }
                    setSecond(second + value);
                    return;
                } else {
                    if (second.length === 5) {
                        return toast({
                            variant: 'destructive',
                            title: 'Input Error',
                            description: 'You cannot have more than 3 digits.',
                        })
                    }
                }
            }

            if (second.length === 3) return toast({
                variant: 'destructive',
                title: 'Input Error',
                description: 'You cannot have more than 3 digits.',
            })
            setSecond(second + value);
            return;
        }
    }

    const clear = () => {

        if (!first && !type && !second) {
            return toast({
                variant: 'destructive',
                title: 'Nothing to clear',
                description: 'You need to enter something to clear.',
            })
        }

        setFirst('');
        setSecond('');
        setType('');
        setResult('');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-4 gap-2 bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
                        {result && <div className="col-span-4 text-right text-md font-bold text-gray-600 dark:text-gray-200" id="result">
                            {first.toUpperCase()} {type} {second.toUpperCase()}
                        </div>}
                        {!result && first && type && <div className="col-span-4 text-right text-md font-bold text-gray-600 dark:text-gray-200" id="result">
                            {first.toUpperCase()} {type}
                        </div>}
                        <div className="col-span-4 text-right text-2xl font-bold text-gray-800 dark:text-gray-200" id="result">
                            {
                                !result && !first && !second && <>Enter a number</>
                            }
                            {
                                !result && first && !type && <>{first.toUpperCase()}</>
                            }
                            {
                                !result && first && type && !second && <>Enter another number</>
                            }
                            {
                                !result && first && type && second && <>{second.toUpperCase()}</>
                            }
                            {
                                result && <>Answer: {result.toUpperCase()}</>
                            }
                        </div>
                        <Button onClick={() => {
                            if (result) {
                                setFirst(result);
                                setResult('');
                                setSecond('');
                            }
                            setType('+');
                        }} disabled={!first && true} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            +
                        </Button>
                        <Button onClick={() => {
                            if (!first) {
                                setFirst('-');
                            } else {
                                if (second.startsWith('(')) {
                                    setSecond(second + '-');
                                } else {
                                    if (result) {
                                        setFirst(result);
                                        setResult('');
                                        setSecond('');
                                    }
                                    setType('-');
                                };
                            }
                        }} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            -
                        </Button>
                        <Button onClick={() => {
                            if (result) {
                                setFirst(result);
                                setResult('');
                                setSecond('');
                            }
                            setType('*')
                        }} disabled={!first && true} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            *
                        </Button>
                        <Button onClick={() => {
                            if (result) {
                                setFirst(result);
                                setResult('');
                                setSecond('');
                            }
                            setType('/');
                        }} disabled={!first && true} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            /
                        </Button>
                        <Button onClick={() => clear()} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            Clear
                        </Button>
                        <Button onClick={() => handleTyping('(')} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            {'('}
                        </Button>
                        <Button onClick={() => handleTyping(')')} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            {')'}
                        </Button>
                        <Button onClick={() => calculate()} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                            =
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <div className="grid grid-cols-4 gap-2">
                            {['C', 'D', 'E', 'F', '8', '9', 'A', 'B', '4', '5', '6', '7', '0', '1', '2', '3'].map((item: string, key: number) => {
                                return <Button onClick={() => handleTyping(item)} className="rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500">
                                    {item}
                                </Button>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div >
    )
}