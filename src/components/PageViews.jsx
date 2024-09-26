import React from "react";
import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
const PageViews = () => {
  const [visitCount, setVisitCount] = useState(0);
  useEffect(() => {
    const currentCount = localStorage.getItem("visitCount");
    if (currentCount) {
      const newCount = parseInt(currentCount) + 1;
      setVisitCount(newCount);
      localStorage.setItem("visitCount", newCount);
    } else {
      setVisitCount(1);
      localStorage.setItem("visitCount", 1);
    }
  }, []);
  return (
    <>
      <Container className="mt-5 w-50 vh-100">
        <Card>
          <Card className="card-body">
            <Card.Title>Page Visit Counter</Card.Title>
            <Card.Text>
              This page has been visited <strong>{visitCount}</strong> times.
            </Card.Text>
          </Card>
        </Card>
      </Container>
    </>
  );
};

export default PageViews;
