import React from 'react'
import styled from 'styled-components'

import { questionsAndAnswers } from './questionsAndAnswers'

import { BodyLarge, FancyH1, H3, } from '../typography'
import { ExpansionPanel } from '../expansionPanel'

const FAQPage: React.FC = () => {
    return (
        <FAQPageRoot>
            <PageTitle>Frequently Asked Questions</PageTitle>
            {questionsAndAnswers.map(question => (
                <ExpansionPanel
                    key={question.index}
                    title={question.question}
                >
                    <BodyLarge>
                        {question.answer}
                    </BodyLarge>
                </ExpansionPanel>
            ))}

            <AdditionalQuestions>
                <H3>Still have questions?</H3>
                <BodyLarge>If you cannot find the answer to your question in our FAQs, please reach email us at daveandangewedding@gmail.com</BodyLarge>
                <BodyLarge>We will get back to you as soon as possible!</BodyLarge>
            </AdditionalQuestions>
        </FAQPageRoot>
    )
}

const FAQPageRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PageTitle = styled(FancyH1)`
    margin-bottom: 48px;
    text-align: center;
`

const AdditionalQuestions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 48px 72px 72px;
    max-width: 600px;
`

export default FAQPage
