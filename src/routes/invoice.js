import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice, getInvoices } from '../data'

function Invoice() {
	let params = useParams()
	const invoice = getInvoice(parseInt(params.invoiceId, 10))
	return (
		<main style={{ padding: '1rem' }}>
			<h3>Total Due: {invoice.amount}</h3>
			<p>
				{invoice.name}: {invoice.number}
			</p>
			<p>Due Date: {invoice.due}</p>
		</main>
	)
}

export default Invoice
