import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

function NewQuote() {
  const {sendRequest, status} = useHttp(addQuote); 
  // we are destructring that custom hook has returned
  const history = useHistory();

  useEffect(()=> {
    if(status === 'completed'){
      history.push('./quotes');
    }
  }, [status, history])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
