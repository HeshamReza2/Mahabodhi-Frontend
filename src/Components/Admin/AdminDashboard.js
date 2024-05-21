import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'
import { Col, Container, Row } from 'react-bootstrap'
import HeadingPage from '../HeadingPage'

function AdminDashboard() {
    const [ dataPoints, setDataPoints] = useState([
        {x: new Date('2024-02-01'), y: 10},
        {x: new Date('2024-02-02'), y: 20},
        {x: new Date('2024-02-03'), y: 30},
        {x: new Date('2024-02-04'), y: 40},
        {x: new Date('2024-02-05'), y: 50},
        {x: new Date('2024-02-06'), y: 60},
        {x: new Date('2024-02-07'), y: 70},
        {x: new Date('2024-02-08'), y: 80},
        {x: new Date('2024-02-09'), y: 90},
        {x: new Date('2024-02-10'), y: 100},
        {x: new Date('2024-02-11'), y: 10},
        {x: new Date('2024-02-12'), y: 20},
        {x: new Date('2024-02-13'), y: 30},
        {x: new Date('2024-02-14'), y: 40},
        {x: new Date('2024-02-15'), y: 50},
        {x: new Date('2024-02-16'), y: 60},
        {x: new Date('2024-02-17'), y: 70},
        {x: new Date('2024-02-18'), y: 80},
        {x: new Date('2024-02-19'), y: 90},
        {x: new Date('2024-02-20'), y: 100},
        {x: new Date('2024-02-21'), y: 10},
        {x: new Date('2024-02-22'), y: 20},
        {x: new Date('2024-02-23'), y: 30},
        {x: new Date('2024-02-24'), y: 40},
        {x: new Date('2024-02-25'), y: 50},
        {x: new Date('2024-02-26'), y: 60},
        {x: new Date('2024-02-27'), y: 70},
        {x: new Date('2024-02-28'), y: 80},
        {x: new Date('2024-02-29'), y: 90},
        {x: new Date('2024-02-30'), y: 100},
        {x: new Date('2024-03-01'), y: 10},
        {x: new Date('2024-03-02'), y: 20},
        {x: new Date('2024-03-03'), y: 30},
        {x: new Date('2024-03-04'), y: 40},
        {x: new Date('2024-03-05'), y: 50},
        {x: new Date('2024-03-06'), y: 60},
        {x: new Date('2024-03-07'), y: 70},
        {x: new Date('2024-03-08'), y: 80},
        {x: new Date('2024-03-09'), y: 90},
        {x: new Date('2024-03-10'), y: 100},
        {x: new Date('2024-03-11'), y: 10},
        {x: new Date('2024-03-12'), y: 20},
        {x: new Date('2024-03-13'), y: 30},
        {x: new Date('2024-03-14'), y: 40},
        {x: new Date('2024-03-15'), y: 50},
        {x: new Date('2024-03-16'), y: 60},
        {x: new Date('2024-03-17'), y: 70},
        {x: new Date('2024-03-18'), y: 80},
        {x: new Date('2024-03-19'), y: 90},
        {x: new Date('2024-03-20'), y: 100},
        {x: new Date('2024-03-21'), y: 10},
        {x: new Date('2024-03-22'), y: 20},
        {x: new Date('2024-03-23'), y: 30},
        {x: new Date('2024-03-24'), y: 40},
        {x: new Date('2024-03-25'), y: 50},
        {x: new Date('2024-03-26'), y: 60},
        {x: new Date('2024-03-27'), y: 70},
        {x: new Date('2024-03-28'), y: 80},
        {x: new Date('2024-03-29'), y: 90},
        {x: new Date('2024-03-30'), y: 100},
        {x: new Date('2024-04-01'), y: 10},
        {x: new Date('2024-04-02'), y: 20},
        {x: new Date('2024-04-03'), y: 30},
        {x: new Date('2024-04-04'), y: 40},
        {x: new Date('2024-04-05'), y: 50},
        {x: new Date('2024-04-06'), y: 60},
        {x: new Date('2024-04-07'), y: 70},
        {x: new Date('2024-04-08'), y: 80},
        {x: new Date('2024-04-09'), y: 90},
        {x: new Date('2024-04-10'), y: 100},
        {x: new Date('2024-04-11'), y: 10},
        {x: new Date('2024-04-12'), y: 20},
        {x: new Date('2024-04-13'), y: 30},
        {x: new Date('2024-04-14'), y: 40},
        {x: new Date('2024-04-15'), y: 50},
        {x: new Date('2024-04-16'), y: 60},
        {x: new Date('2024-04-17'), y: 70},
        {x: new Date('2024-04-18'), y: 80},
        {x: new Date('2024-04-19'), y: 90},
        {x: new Date('2024-04-20'), y: 100},
        {x: new Date('2024-04-21'), y: 10},
        {x: new Date('2024-04-22'), y: 20},
        {x: new Date('2024-04-23'), y: 30},
        {x: new Date('2024-04-24'), y: 40},
        {x: new Date('2024-04-25'), y: 50},
        {x: new Date('2024-04-26'), y: 60},
        {x: new Date('2024-04-27'), y: 70},
        {x: new Date('2024-04-28'), y: 80},
        {x: new Date('2024-04-29'), y: 90},
        {x: new Date('2024-04-30'), y: 100},
        {x: new Date('2024-05-01'), y: 10},
        {x: new Date('2024-05-02'), y: 20},
        {x: new Date('2024-05-03'), y: 30},
        {x: new Date('2024-05-04'), y: 40},
        {x: new Date('2024-05-05'), y: 50},
        {x: new Date('2024-05-06'), y: 60},
        {x: new Date('2024-05-07'), y: 70},
        {x: new Date('2024-05-08'), y: 80},
        {x: new Date('2024-05-09'), y: 90},
        {x: new Date('2024-05-10'), y: 100},
        {x: new Date('2024-05-11'), y: 10},
        {x: new Date('2024-05-12'), y: 20},
        {x: new Date('2024-05-13'), y: 30},
        {x: new Date('2024-05-14'), y: 40},
        {x: new Date('2024-05-15'), y: 50},
        {x: new Date('2024-05-16'), y: 60},
        {x: new Date('2024-05-17'), y: 70},
        {x: new Date('2024-05-18'), y: 80},
        {x: new Date('2024-05-19'), y: 90},
        {x: new Date('2024-05-20'), y: 100},
        {x: new Date('2024-05-21'), y: 10},
        {x: new Date('2024-05-22'), y: 20},
        {x: new Date('2024-05-23'), y: 30},
        {x: new Date('2024-05-24'), y: 40},
        {x: new Date('2024-05-25'), y: 50},
        {x: new Date('2024-05-26'), y: 60},
        {x: new Date('2024-05-27'), y: 70},
        {x: new Date('2024-05-28'), y: 80},
        {x: new Date('2024-05-29'), y: 90},
        {x: new Date('2024-05-30'), y: 100},
        {x: new Date('2024-06-01'), y: 10},
        {x: new Date('2024-06-02'), y: 20},
        {x: new Date('2024-06-03'), y: 30},
        {x: new Date('2024-06-04'), y: 40},
        {x: new Date('2024-06-05'), y: 50},
        {x: new Date('2024-06-06'), y: 60},
        {x: new Date('2024-06-07'), y: 70},
        {x: new Date('2024-06-08'), y: 80},
        {x: new Date('2024-06-09'), y: 90},
        {x: new Date('2024-06-10'), y: 100},
        {x: new Date('2024-06-11'), y: 10},
        {x: new Date('2024-06-12'), y: 20},
        {x: new Date('2024-06-13'), y: 30},
        {x: new Date('2024-06-14'), y: 40},
        {x: new Date('2024-06-15'), y: 50},
        {x: new Date('2024-06-16'), y: 60},
        {x: new Date('2024-06-17'), y: 70},
        {x: new Date('2024-06-18'), y: 80},
        {x: new Date('2024-06-19'), y: 90},
        {x: new Date('2024-06-20'), y: 100},
        {x: new Date('2024-06-21'), y: 10},
        {x: new Date('2024-06-22'), y: 20},
        {x: new Date('2024-06-23'), y: 30},
        {x: new Date('2024-06-24'), y: 40},
        {x: new Date('2024-06-25'), y: 50},
        {x: new Date('2024-06-26'), y: 60},
        {x: new Date('2024-06-27'), y: 70},
        {x: new Date('2024-06-28'), y: 80},
        {x: new Date('2024-06-29'), y: 90},
        {x: new Date('2024-06-30'), y: 100},
        {x: new Date('2024-07-01'), y: 10},
        {x: new Date('2024-07-02'), y: 20},
        {x: new Date('2024-07-03'), y: 30},
        {x: new Date('2024-07-04'), y: 40},
        {x: new Date('2024-07-05'), y: 50},
        {x: new Date('2024-07-06'), y: 60},
        {x: new Date('2024-07-07'), y: 70},
        {x: new Date('2024-07-08'), y: 80},
        {x: new Date('2024-07-09'), y: 90},
        {x: new Date('2024-07-10'), y: 100},
        {x: new Date('2024-07-11'), y: 10},
        {x: new Date('2024-07-12'), y: 20},
        {x: new Date('2024-07-13'), y: 30},
        {x: new Date('2024-07-14'), y: 40},
        {x: new Date('2024-07-15'), y: 50},
        {x: new Date('2024-07-16'), y: 60},
        {x: new Date('2024-07-17'), y: 70},
        {x: new Date('2024-07-18'), y: 80},
        {x: new Date('2024-07-19'), y: 90},
        {x: new Date('2024-07-20'), y: 100},
        {x: new Date('2024-07-21'), y: 10},
        {x: new Date('2024-07-22'), y: 20},
        {x: new Date('2024-07-23'), y: 30},
        {x: new Date('2024-07-24'), y: 40},
        {x: new Date('2024-07-25'), y: 50},
        {x: new Date('2024-07-26'), y: 60},
        {x: new Date('2024-07-27'), y: 70},
        {x: new Date('2024-07-28'), y: 80},
        {x: new Date('2024-07-29'), y: 90},
        {x: new Date('2024-07-30'), y: 100},
        {x: new Date('2024-08-01'), y: 10},
        {x: new Date('2024-08-02'), y: 20},
        {x: new Date('2024-08-03'), y: 30},
        {x: new Date('2024-08-04'), y: 40},
        {x: new Date('2024-08-05'), y: 50},
        {x: new Date('2024-08-06'), y: 60},
        {x: new Date('2024-08-07'), y: 70},
        {x: new Date('2024-08-08'), y: 80},
        {x: new Date('2024-08-09'), y: 90},
        {x: new Date('2024-08-10'), y: 100},
        {x: new Date('2024-08-11'), y: 10},
        {x: new Date('2024-08-12'), y: 20},
        {x: new Date('2024-08-13'), y: 30},
        {x: new Date('2024-08-14'), y: 40},
        {x: new Date('2024-08-15'), y: 50},
        {x: new Date('2024-08-16'), y: 60},
        {x: new Date('2024-08-17'), y: 70},
        {x: new Date('2024-08-18'), y: 80},
        {x: new Date('2024-08-19'), y: 90},
        {x: new Date('2024-08-20'), y: 100},
        {x: new Date('2024-08-21'), y: 10},
        {x: new Date('2024-08-22'), y: 20},
        {x: new Date('2024-08-23'), y: 30},
        {x: new Date('2024-08-24'), y: 40},
        {x: new Date('2024-08-25'), y: 50},
        {x: new Date('2024-08-26'), y: 60},
        {x: new Date('2024-08-27'), y: 70},
        {x: new Date('2024-08-28'), y: 80},
        {x: new Date('2024-08-29'), y: 90},
        {x: new Date('2024-08-30'), y: 100},
        {x: new Date('2024-09-01'), y: 10},
        {x: new Date('2024-09-02'), y: 20},
        {x: new Date('2024-09-03'), y: 30},
        {x: new Date('2024-09-04'), y: 40},
        {x: new Date('2024-09-05'), y: 50},
        {x: new Date('2024-09-06'), y: 60},
        {x: new Date('2024-09-07'), y: 70},
        {x: new Date('2024-09-08'), y: 80},
        {x: new Date('2024-09-09'), y: 90},
        {x: new Date('2024-09-10'), y: 100},
        {x: new Date('2024-09-11'), y: 10},
        {x: new Date('2024-09-12'), y: 20},
        {x: new Date('2024-09-13'), y: 30},
        {x: new Date('2024-09-14'), y: 40},
        {x: new Date('2024-09-15'), y: 50},
        {x: new Date('2024-09-16'), y: 60},
        {x: new Date('2024-09-17'), y: 70},
        {x: new Date('2024-09-18'), y: 80},
        {x: new Date('2024-09-19'), y: 90},
        {x: new Date('2024-09-20'), y: 100},
        {x: new Date('2024-09-21'), y: 10},
        {x: new Date('2024-09-22'), y: 20},
        {x: new Date('2024-09-23'), y: 30},
        {x: new Date('2024-09-24'), y: 40},
        {x: new Date('2024-09-25'), y: 50},
        {x: new Date('2024-09-26'), y: 60},
        {x: new Date('2024-09-27'), y: 70},
        {x: new Date('2024-09-28'), y: 80},
        {x: new Date('2024-09-29'), y: 90},
        {x: new Date('2024-09-30'), y: 100},
        {x: new Date('2024-10-01'), y: 10},
        {x: new Date('2024-10-02'), y: 20},
        {x: new Date('2024-10-03'), y: 30},
        {x: new Date('2024-10-04'), y: 40},
        {x: new Date('2024-10-05'), y: 50},
        {x: new Date('2024-10-06'), y: 60},
        {x: new Date('2024-10-07'), y: 70},
        {x: new Date('2024-10-08'), y: 80},
        {x: new Date('2024-10-09'), y: 90},
        {x: new Date('2024-10-10'), y: 100},
        {x: new Date('2024-10-11'), y: 10},
        {x: new Date('2024-10-12'), y: 20},
        {x: new Date('2024-10-13'), y: 30},
        {x: new Date('2024-10-14'), y: 40},
        {x: new Date('2024-10-15'), y: 50},
        {x: new Date('2024-10-16'), y: 60},
        {x: new Date('2024-10-17'), y: 70},
        {x: new Date('2024-10-18'), y: 80},
        {x: new Date('2024-10-19'), y: 90},
        {x: new Date('2024-10-20'), y: 100},
        {x: new Date('2024-10-21'), y: 10},
        {x: new Date('2024-10-22'), y: 20},
        {x: new Date('2024-10-23'), y: 30},
        {x: new Date('2024-10-24'), y: 40},
        {x: new Date('2024-10-25'), y: 50},
        {x: new Date('2024-10-26'), y: 60},
        {x: new Date('2024-10-27'), y: 70},
        {x: new Date('2024-10-28'), y: 80},
        {x: new Date('2024-10-29'), y: 90},
        {x: new Date('2024-10-30'), y: 100},
        {x: new Date('2025-02-02'), y: 20},
        {x: new Date('2025-02-03'), y: 30},
        {x: new Date('2025-02-04'), y: 40},
        {x: new Date('2025-02-05'), y: 50},
        {x: new Date('2025-02-06'), y: 60},
        {x: new Date('2025-02-07'), y: 70},
        {x: new Date('2025-02-08'), y: 80},
        {x: new Date('2025-02-09'), y: 90},
        {x: new Date('2025-02-10'), y: 100},
        {x: new Date('2025-02-11'), y: 10},
        {x: new Date('2025-02-12'), y: 20},
        {x: new Date('2025-02-13'), y: 30},
        {x: new Date('2025-02-14'), y: 40},
        {x: new Date('2025-02-15'), y: 50},
        {x: new Date('2025-02-16'), y: 60},
        {x: new Date('2025-02-17'), y: 70},
        {x: new Date('2025-02-18'), y: 80},
        {x: new Date('2025-02-19'), y: 90},
        {x: new Date('2025-02-20'), y: 100},
        {x: new Date('2025-02-21'), y: 10},
        {x: new Date('2025-02-22'), y: 20},
        {x: new Date('2025-02-23'), y: 30},
        {x: new Date('2025-02-24'), y: 40},
        {x: new Date('2025-02-25'), y: 50},
        {x: new Date('2025-02-26'), y: 60},
        {x: new Date('2025-02-27'), y: 70},
        {x: new Date('2025-02-28'), y: 80},
        {x: new Date('2025-02-29'), y: 90},
        {x: new Date('2025-02-30'), y: 100},
        {x: new Date('2025-03-01'), y: 10},
        {x: new Date('2025-03-02'), y: 20},
        {x: new Date('2025-03-03'), y: 30},
        {x: new Date('2025-03-04'), y: 40},
        {x: new Date('2025-03-05'), y: 50},
        {x: new Date('2025-03-06'), y: 60},
        {x: new Date('2025-03-07'), y: 70},
        {x: new Date('2025-03-08'), y: 80},
        {x: new Date('2025-03-09'), y: 90},
        {x: new Date('2025-03-10'), y: 100},
        {x: new Date('2025-03-11'), y: 10},
        {x: new Date('2025-03-12'), y: 20},
        {x: new Date('2025-03-13'), y: 30},
        {x: new Date('2025-03-14'), y: 40},
        {x: new Date('2025-03-15'), y: 50},
        {x: new Date('2025-03-16'), y: 60},
        {x: new Date('2025-03-17'), y: 70},
        {x: new Date('2025-03-18'), y: 80},
        {x: new Date('2025-03-19'), y: 90},
        {x: new Date('2025-03-20'), y: 100},
        {x: new Date('2025-03-21'), y: 10},
        {x: new Date('2025-03-22'), y: 20},
        {x: new Date('2025-03-23'), y: 30},
        {x: new Date('2025-03-24'), y: 40},
        {x: new Date('2025-03-25'), y: 50},
        {x: new Date('2025-03-26'), y: 60},
        {x: new Date('2025-03-27'), y: 70},
        {x: new Date('2025-03-28'), y: 80},
        {x: new Date('2025-03-29'), y: 90},
        {x: new Date('2025-03-30'), y: 100},
        {x: new Date('2025-04-01'), y: 10},
        {x: new Date('2025-04-02'), y: 20},
        {x: new Date('2025-04-03'), y: 30},
        {x: new Date('2025-04-04'), y: 40},
        {x: new Date('2025-04-05'), y: 50},
        {x: new Date('2025-04-06'), y: 60},
        {x: new Date('2025-04-07'), y: 70},
        {x: new Date('2025-04-08'), y: 80},
        {x: new Date('2025-04-09'), y: 90},
        {x: new Date('2025-04-10'), y: 100},
        {x: new Date('2025-04-11'), y: 10},
        {x: new Date('2025-04-12'), y: 20},
        {x: new Date('2025-04-13'), y: 30},
        {x: new Date('2025-04-14'), y: 40},
        {x: new Date('2025-04-15'), y: 50},
        {x: new Date('2025-04-16'), y: 60},
        {x: new Date('2025-04-17'), y: 70},
        {x: new Date('2025-04-18'), y: 80},
        {x: new Date('2025-04-19'), y: 90},
        {x: new Date('2025-04-20'), y: 100},
        {x: new Date('2025-04-21'), y: 10},
        {x: new Date('2025-04-22'), y: 20},
        {x: new Date('2025-04-23'), y: 30},
        {x: new Date('2025-04-24'), y: 40},
        {x: new Date('2025-04-25'), y: 50},
        {x: new Date('2025-04-26'), y: 60},
        {x: new Date('2025-04-27'), y: 70},
        {x: new Date('2025-04-28'), y: 80},
        {x: new Date('2025-04-29'), y: 90},
        {x: new Date('2025-04-30'), y: 100},
        {x: new Date('2025-05-01'), y: 10},
        {x: new Date('2025-05-02'), y: 20},
        {x: new Date('2025-05-03'), y: 30},
        {x: new Date('2025-05-04'), y: 40},
        {x: new Date('2025-05-05'), y: 50},
        {x: new Date('2025-05-06'), y: 60},
        {x: new Date('2025-05-07'), y: 70},
        {x: new Date('2025-05-08'), y: 80},
        {x: new Date('2025-05-09'), y: 90},
        {x: new Date('2025-05-10'), y: 100},
        {x: new Date('2025-05-11'), y: 10},
        {x: new Date('2025-05-12'), y: 20},
        {x: new Date('2025-05-13'), y: 30},
        {x: new Date('2025-05-14'), y: 40},
        {x: new Date('2025-05-15'), y: 50},
        {x: new Date('2025-05-16'), y: 60},
        {x: new Date('2025-05-17'), y: 70},
        {x: new Date('2025-05-18'), y: 80},
        {x: new Date('2025-05-19'), y: 90},
        {x: new Date('2025-05-20'), y: 100},
        {x: new Date('2025-05-21'), y: 10},
        {x: new Date('2025-05-22'), y: 20},
        {x: new Date('2025-05-23'), y: 30},
        {x: new Date('2025-05-24'), y: 40},
        {x: new Date('2025-05-25'), y: 50},
        {x: new Date('2025-05-26'), y: 60},
        {x: new Date('2025-05-27'), y: 70},
        {x: new Date('2025-05-28'), y: 80},
        {x: new Date('2025-05-29'), y: 90},
        {x: new Date('2025-05-30'), y: 100},
        {x: new Date('2025-06-01'), y: 10},
        {x: new Date('2025-06-02'), y: 20},
        {x: new Date('2025-06-03'), y: 30},
        {x: new Date('2025-06-04'), y: 40},
        {x: new Date('2025-06-05'), y: 50},
        {x: new Date('2025-06-06'), y: 60},
        {x: new Date('2025-06-07'), y: 70},
        {x: new Date('2025-06-08'), y: 80},
        {x: new Date('2025-06-09'), y: 90},
        {x: new Date('2025-06-10'), y: 100},
        {x: new Date('2025-06-11'), y: 10},
        {x: new Date('2025-06-12'), y: 20},
        {x: new Date('2025-06-13'), y: 30},
        {x: new Date('2025-06-14'), y: 40},
        {x: new Date('2025-06-15'), y: 50},
        {x: new Date('2025-06-16'), y: 60},
        {x: new Date('2025-06-17'), y: 70},
        {x: new Date('2025-06-18'), y: 80},
        {x: new Date('2025-06-19'), y: 90},
        {x: new Date('2025-06-20'), y: 100},
        {x: new Date('2025-06-21'), y: 10},
        {x: new Date('2025-06-22'), y: 20},
        {x: new Date('2025-06-23'), y: 30},
        {x: new Date('2025-06-24'), y: 40},
        {x: new Date('2025-06-25'), y: 50},
        {x: new Date('2025-06-26'), y: 60},
        {x: new Date('2025-06-27'), y: 70},
        {x: new Date('2025-06-28'), y: 80},
        {x: new Date('2025-06-29'), y: 90},
        {x: new Date('2025-06-30'), y: 100},
        {x: new Date('2025-07-01'), y: 10},
        {x: new Date('2025-07-02'), y: 20},
        {x: new Date('2025-07-03'), y: 30},
        {x: new Date('2025-07-04'), y: 40},
        {x: new Date('2025-07-05'), y: 50},
        {x: new Date('2025-07-06'), y: 60},
        {x: new Date('2025-07-07'), y: 70},
        {x: new Date('2025-07-08'), y: 80},
        {x: new Date('2025-07-09'), y: 90},
        {x: new Date('2025-07-10'), y: 100},
        {x: new Date('2025-07-11'), y: 10},
        {x: new Date('2025-07-12'), y: 20},
        {x: new Date('2025-07-13'), y: 30},
        {x: new Date('2025-07-14'), y: 40},
        {x: new Date('2025-07-15'), y: 50},
        {x: new Date('2025-07-16'), y: 60},
        {x: new Date('2025-07-17'), y: 70},
        {x: new Date('2025-07-18'), y: 80},
        {x: new Date('2025-07-19'), y: 90},
        {x: new Date('2025-07-20'), y: 100},
        {x: new Date('2025-07-21'), y: 10},
        {x: new Date('2025-07-22'), y: 20},
        {x: new Date('2025-07-23'), y: 30},
        {x: new Date('2025-07-24'), y: 40},
        {x: new Date('2025-07-25'), y: 50},
        {x: new Date('2025-07-26'), y: 60},
        {x: new Date('2025-07-27'), y: 70},
        {x: new Date('2025-07-28'), y: 80},
        {x: new Date('2025-07-29'), y: 90},
        {x: new Date('2025-07-30'), y: 100},
        {x: new Date('2025-08-01'), y: 10},
        {x: new Date('2025-08-02'), y: 20},
        {x: new Date('2025-08-03'), y: 30},
        {x: new Date('2025-08-04'), y: 40},
        {x: new Date('2025-08-05'), y: 50},
        {x: new Date('2025-08-06'), y: 60},
        {x: new Date('2025-08-07'), y: 70},
        {x: new Date('2025-08-08'), y: 80},
        {x: new Date('2025-08-09'), y: 90},
        {x: new Date('2025-08-10'), y: 100},
        {x: new Date('2025-08-11'), y: 10},
        {x: new Date('2025-08-12'), y: 20},
        {x: new Date('2025-08-13'), y: 30},
        {x: new Date('2025-08-14'), y: 40},
        {x: new Date('2025-08-15'), y: 50},
        {x: new Date('2025-08-16'), y: 60},
        {x: new Date('2025-08-17'), y: 70},
        {x: new Date('2025-08-18'), y: 80},
        {x: new Date('2025-08-19'), y: 90},
        {x: new Date('2025-08-20'), y: 100},
        {x: new Date('2025-08-21'), y: 10},
        {x: new Date('2025-08-22'), y: 20},
        {x: new Date('2025-08-23'), y: 30},
        {x: new Date('2025-08-24'), y: 40},
        {x: new Date('2025-08-25'), y: 50},
        {x: new Date('2025-08-26'), y: 60},
        {x: new Date('2025-08-27'), y: 70},
        {x: new Date('2025-08-28'), y: 80},
        {x: new Date('2025-08-29'), y: 90},
        {x: new Date('2025-08-30'), y: 100},
        {x: new Date('2025-09-01'), y: 10},
        {x: new Date('2025-09-02'), y: 20},
        {x: new Date('2025-09-03'), y: 30},
        {x: new Date('2025-09-04'), y: 40},
        {x: new Date('2025-09-05'), y: 50},
        {x: new Date('2025-09-06'), y: 60},
        {x: new Date('2025-09-07'), y: 70},
        {x: new Date('2025-09-08'), y: 80},
        {x: new Date('2025-09-09'), y: 90},
        {x: new Date('2025-09-10'), y: 100},
        {x: new Date('2025-09-11'), y: 10},
        {x: new Date('2025-09-12'), y: 20},
        {x: new Date('2025-09-13'), y: 30},
        {x: new Date('2025-09-14'), y: 40},
        {x: new Date('2025-09-15'), y: 50},
        {x: new Date('2025-09-16'), y: 60},
        {x: new Date('2025-09-17'), y: 70},
        {x: new Date('2025-09-18'), y: 80},
        {x: new Date('2025-09-19'), y: 90},
        {x: new Date('2025-09-20'), y: 100},
        {x: new Date('2025-09-21'), y: 10},
        {x: new Date('2025-09-22'), y: 20},
        {x: new Date('2025-09-23'), y: 30},
        {x: new Date('2025-09-24'), y: 40},
        {x: new Date('2025-09-25'), y: 50},
        {x: new Date('2025-09-26'), y: 60},
        {x: new Date('2025-09-27'), y: 70},
        {x: new Date('2025-09-28'), y: 80},
        {x: new Date('2025-09-29'), y: 90},
        {x: new Date('2025-09-30'), y: 100},
        {x: new Date('2025-10-01'), y: 10},
        {x: new Date('2025-10-02'), y: 20},
        {x: new Date('2025-10-03'), y: 30},
        {x: new Date('2025-10-04'), y: 40},
        {x: new Date('2025-10-05'), y: 50},
        {x: new Date('2025-10-06'), y: 60},
        {x: new Date('2025-10-07'), y: 70},
        {x: new Date('2025-10-08'), y: 80},
        {x: new Date('2025-10-09'), y: 90},
        {x: new Date('2025-10-10'), y: 100},
        {x: new Date('2025-10-11'), y: 10},
        {x: new Date('2025-10-12'), y: 20},
        {x: new Date('2025-10-13'), y: 30},
        {x: new Date('2025-10-14'), y: 40},
        {x: new Date('2025-10-15'), y: 50},
        {x: new Date('2025-10-16'), y: 60},
        {x: new Date('2025-10-17'), y: 70},
        {x: new Date('2025-10-18'), y: 80},
        {x: new Date('2025-10-19'), y: 90},
        {x: new Date('2025-10-20'), y: 100},
        {x: new Date('2025-10-21'), y: 10},
        {x: new Date('2025-10-22'), y: 20},
        {x: new Date('2025-10-23'), y: 30},
        {x: new Date('2025-10-24'), y: 40},
        {x: new Date('2025-10-25'), y: 50},
        {x: new Date('2025-10-26'), y: 60},
        {x: new Date('2025-10-27'), y: 70},
        {x: new Date('2025-10-28'), y: 80},
        {x: new Date('2025-10-29'), y: 90},
        {x: new Date('2025-10-30'), y: 100}
    ])

    const [ newData, setNewData ] = useState([])
    console.log(newData);

    const lastHundredData = (dataPoints) => {
        const limit = dataPoints.length()
        for(let i=limit-10; i<limit; i++){
            newData.push(dataPoints[i])
        }
    }

    useEffect(() => {
        const limit = dataPoints.length
        for(let i=limit-100; i<limit; i++){
            //setNewData(...newData, [dataPoints[i]])
            newData.push(dataPoints[i])
        }
    }, [])
  return (
    <>
        <HeadingPage icon='fa-gauge' heading='Dashboard' />

        <Container fluid>
            <Row>
                <Col lg='3' className='count-box-parent'>
                    <div className='count-box'>
                        <div className='count-box-1'>
                            <h6>Total Applicants</h6>
                            <p>6456</p>
                        </div>

                        <a className='count-box-icon'><i class="fa-solid fa-id-card"></i></a>
                    </div>
                </Col>
                
                <Col lg='3' className='count-box-parent'>
                    <div className='count-box'>
                        <div className='count-box-1'>
                            <h6>Paid</h6>
                            <p>4709</p>
                        </div>

                        <a className='count-box-icon'><i class="fa-solid fa-money-check"></i></a>
                    </div>
                </Col>
                
                <Col lg='3' className='count-box-parent'>
                    <div className='count-box'>
                        <div className='count-box-1'>
                            <h6>Approved</h6>
                            <p>4676</p>
                        </div>

                        <a className='count-box-icon'><i class="fa-solid fa-user-check"></i></a>
                    </div>
                </Col>
                
                <Col lg='3' className='count-box-parent'>
                    <div className='count-box'>
                        <div className='count-box-1'>
                            <h6>Amount</h6>
                            <p>14281450</p>
                        </div>

                        <a className='count-box-icon'><i class="fa-solid fa-indian-rupee-sign"></i></a>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md='8'>
                    Daily Applicant Flow
                </Col>
                
                <Col md='4'>
                    Programme Wise Applicant
                </Col>
            </Row>

            <Row className='applicant-count-head-row'>
                <Col md='12' className='applicant-count-head'>
                    <div className='session-input'>
                        <select>
                            <option>2022-25</option>
                            <option>2021-24</option>
                            <option>2020-23</option>
                        </select>
                    </div>

                    <h6>Programme Wise Applicant</h6>

                    <div className='download-print'>
                        <button>Download</button>
                        <button>Print</button>
                    </div>
                </Col>

                <Col sm='12' className='applicant-count-table table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Programme</th>
                                <th scope='col'>Discipline</th>
                                <th scope='col'>Total</th>
                                <th scope='col'>Paid</th>
                                <th scope='col'>Approved</th>
                                <th scope='col'>Total Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope='row'>1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AdminDashboard
