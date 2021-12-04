import React, { useState, useEffect } from "react";

export default function withDataFetching(WrappedComponent) {
  function WithDataFetching(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
      fetch(props.dataSource)
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, [props.dataSource]);

    return (
      <WrappedComponent
        data={data}
        loading={loading}
        error={error}
        {...props}
      />
    );
  }

  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent})`;

  return WithDataFetching;
}
