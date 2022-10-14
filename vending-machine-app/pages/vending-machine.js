import 'bulma/css/bulma.css'
import { useState, useEffect } from 'react'
import styles from '../styles/VendingMachine.module.css'
import Head from 'next/head'
import Web3 from 'web3'
import vmContract from '../blockchain/vending'

const VendingMachine = () => {
  const [error, setError] = useState('')
  const [inventory, setInventory] = useState('')

  let web3

  useEffect(() => {
    getInventoryHandler()
  })

  const getInventoryHandler = async () => {
    const inventory = await vmContract.methods.getVendingMachineBalance().call()
    setInventory(inventory)
  }

  const connectWalletHandler = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        web3 = new Web3(window.ethereum)
      } catch (err) {
        setError(err.message)
      }
    } else {
      // meta mask not installed
      console.log("Please install metamask")
    }
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>VendingMachine App</title>
        <meta name="description" content="A blockchain vending machine app" />
      </Head>
      <nav className="navbar mt-4 mb-4">
        <div className="container">
          <div className="navbar-brand">
            <h1>Vending Machine</h1>
          </div>
          <div className="navbar-end">
            <button onClick={connectWalletHandler} className="button is-primary">Connect Wallet</button>
          </div>
        </div>
      </nav>
      <section>
        <div className="container">
          <h2>Vending machine inventory: {inventory}</h2>
        </div>
      </section>
      <section>
        <div className="container has-text-danger">
          <p>{error}</p>
        </div>
      </section>
    </div>
  )
}

export default VendingMachine