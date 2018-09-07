// Code generated by github.com/actgardner/gogen-avro. DO NOT EDIT.
/*
 * SOURCES:
 *     block.schema.v1.asvc
 *     pendingtx.schema.v1.asvc
 */

package models

import (
	"io"
)

type PendingTx struct {
	Hash              string
	Nonce             int64
	NonceHash         string
	From              string
	FromBalance       int64
	To                UnionNullString
	ToBalance         UnionNullLong
	Input             []byte
	ContractAddress   UnionNullString
	Value             int64
	Gas               int64
	GasPrice          int64
	GasUsed           int64
	CumulativeGasUsed int64
	V                 string
	R                 string
	S                 string
	Status            int64
	LogsBloom         []byte
	Logs              []*Log
	Trace             *Trace
	TxStatus          Action
}

func DeserializePendingTx(r io.Reader) (*PendingTx, error) {
	return readPendingTx(r)
}

func NewPendingTx() *PendingTx {
	v := &PendingTx{
		Logs:  make([]*Log, 0),
		Trace: NewTrace(),
	}

	return v
}

func (r *PendingTx) Schema() string {
	return "{\"fields\":[{\"doc\":\"Hash of the transaction\",\"name\":\"hash\",\"type\":\"string\"},{\"doc\":\"Number of transactions sent from a given address\",\"name\":\"nonce\",\"type\":\"long\"},{\"doc\":\"SHA3 of the transaction nonce\",\"name\":\"nonceHash\",\"type\":\"string\"},{\"doc\":\"Address of the sender\",\"name\":\"from\",\"type\":\"string\"},{\"doc\":\"Balance of the sender\",\"name\":\"fromBalance\",\"type\":\"long\"},{\"doc\":\"Address of the recipient (or null when contract creation)\",\"name\":\"to\",\"type\":[\"null\",\"string\"]},{\"doc\":\"Balance of the receiver (or null when contract creation)\",\"name\":\"toBalance\",\"type\":[\"null\",\"long\"]},{\"doc\":\"The data send along with the transaction\",\"name\":\"input\",\"type\":\"bytes\"},{\"doc\":\"If a contract is created, the address of it (or null if is just a regular transaction)\",\"name\":\"contractAddress\",\"type\":[\"null\",\"string\"]},{\"doc\":\"Amount of value transferred in Wei\",\"name\":\"value\",\"type\":\"long\"},{\"doc\":\"Amount of gas provided by the sender\",\"name\":\"gas\",\"type\":\"long\"},{\"doc\":\"Amount of gas price provided by the sender in Wei\",\"name\":\"gasPrice\",\"type\":\"long\"},{\"doc\":\"Amount of gas used consumed by the transaction\",\"name\":\"gasUsed\",\"type\":\"long\"},{\"doc\":\"Cumulative gas used by the transaction\",\"name\":\"cumulativeGasUsed\",\"type\":\"long\"},{\"doc\":\"Transaction signature v\",\"name\":\"v\",\"type\":\"string\"},{\"doc\":\"Transaction signature r\",\"name\":\"r\",\"type\":\"string\"},{\"doc\":\"Transaction signature s\",\"name\":\"s\",\"type\":\"string\"},{\"doc\":\"Transaction result status\",\"name\":\"status\",\"type\":\"long\"},{\"doc\":\"Generated and encoded logs by the transaction\",\"name\":\"logsBloom\",\"type\":\"bytes\"},{\"doc\":\"\",\"name\":\"logs\",\"type\":{\"items\":{\"fields\":[{\"desc\":\"Address of the contract that generated the event\",\"name\":\"address\",\"type\":\"string\"},{\"desc\":\"List of topics provided by the contract\",\"name\":\"topics\",\"type\":{\"items\":\"string\",\"type\":\"array\"}},{\"desc\":\"Supplied by the contract, usually ABI-encoded\",\"name\":\"data\",\"type\":\"bytes\"},{\"desc\":\"Index of the log in the receipt\",\"name\":\"index\",\"type\":\"int\"},{\"desc\":\"True if this log was reverted due to a chain reorganisation\",\"name\":\"removed\",\"type\":\"boolean\"}],\"name\":\"Log\",\"namespace\":\"io.enkrypt.bolt.models\",\"type\":\"record\"},\"type\":\"array\"}},{\"doc\":\"Trace that describes contract creation, destruction or intenal transactions\",\"name\":\"trace\",\"type\":{\"fields\":[{\"desc\":\"Signals if an error happened during execution\",\"name\":\"isError\",\"type\":\"boolean\"},{\"desc\":\"Stores the error message\",\"name\":\"msg\",\"type\":\"string\"},{\"desc\":\"An array describing transfers\",\"name\":\"transfers\",\"type\":{\"items\":{\"fields\":[{\"doc\":\"Type of op executed inside the transaction\",\"name\":\"op\",\"type\":\"string\"},{\"doc\":\"\",\"name\":\"from\",\"type\":\"string\"},{\"doc\":\"\",\"name\":\"to\",\"type\":\"string\"},{\"doc\":\"\",\"name\":\"input\",\"type\":\"bytes\"}],\"name\":\"Transfer\",\"namespace\":\"io.enkrypt.bolt.models\",\"type\":\"record\"},\"type\":\"array\"}}],\"name\":\"Trace\",\"namespace\":\"io.enkrypt.bolt.models\",\"type\":\"record\"}},{\"doc\":\"Spceficies the status of this pending transaction\",\"name\":\"txStatus\",\"type\":{\"name\":\"Action\",\"symbols\":[\"QUEUED\",\"MINED\",\"EXPIRED\",\"REPLACED\",\"UNPAYABLE\",\"INVALID_SENDER\",\"LOW_NONCE\",\"UNDERPRICED\",\"INSUFFICIENT_FUNDS\",\"CAP_EXCEEDING\"],\"type\":\"enum\"}}],\"name\":\"PendingTx\",\"namespace\":\"io.enkrypt.bolt.models\",\"type\":\"record\"}"
}

func (r *PendingTx) Serialize(w io.Writer) error {
	return writePendingTx(r, w)
}
