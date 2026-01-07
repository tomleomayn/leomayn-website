import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.ATTIO_API_KEY
  const listId = process.env.ATTIO_WEBSITE_LEADS_LIST_ID

  // Check if environment variables are set
  if (!apiKey || !listId) {
    return NextResponse.json({
      success: false,
      error: 'Missing environment variables',
      details: {
        hasApiKey: !!apiKey,
        hasListId: !!listId,
      }
    }, { status: 500 })
  }

  // Test data
  const testData = {
    name: 'Test Contact',
    email: 'test@example.com',
    company: 'Test Company',
    message: 'This is a test message from the website contact form.'
  }

  try {
    const response = await fetch(`https://api.attio.com/v2/lists/${listId}/entries`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          values: {
            'name': [{ value: testData.name }],
            'email_addresses': [{ email_address: testData.email }],
            'company': [{ value: testData.company }],
            'notes': [{ value: testData.message }],
            'source': [{ value: 'Website Contact Form' }],
          }
        }
      })
    })

    const responseText = await response.text()
    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch {
      responseData = responseText
    }

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      response: responseData,
      requestBody: {
        data: {
          values: {
            'name': [{ value: testData.name }],
            'email_addresses': [{ email_address: testData.email }],
            'company': [{ value: testData.company }],
            'notes': [{ value: testData.message }],
            'source': [{ value: 'Website Contact Form' }],
          }
        }
      }
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Exception thrown',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
