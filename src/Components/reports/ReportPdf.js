import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
  
  // Create Document Component
  const ReportPdf = (props) => {

    const [report_id, setReport_id] = useState (null)
    const [thank, setThank] = useState ([])
    const [minThick, setMinThick ] =useState(null)
    const [maxHeihgt, setMaxHeihgt] = useState(null)
    const [percentage, setPercentage] = useState(null)
    useEffect ( () => {
        if(props.report_id){
            setReport_id(props.report_id)
            
        }
        // console.log(report_id)
        // console.log(thank)
    } )

    useEffect ( () => {
        if(report_id){
            axios.get(`/thank/get/${report_id}`)
        .then( res =>{
            // console.log(res.data)
            setThank(res.data)
            // console.log(res.data)
        } )
        }
    },[report_id] )
    useEffect ( () => {
        if (thank){
            let { height, diameter, especific_gravity, max_stress_allowed, join_efficiency, minimun_thickness_measured } = thank 

            setMinThick (((2.6 * ( height ) * diameter * especific_gravity)/(max_stress_allowed * join_efficiency))*25.4)

            setMaxHeihgt( ( minimun_thickness_measured * max_stress_allowed * join_efficiency ) / ( 25.4 * 2.6 * diameter * especific_gravity ) )
            
            setPercentage(maxHeihgt*100/height)


        }
    } )

    // console.log(thank)

   



      return (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>minimun Thicknes Require    {minThick}</Text>
            </View>
            <View style={styles.section}>
              <Text>Max height {maxHeihgt}</Text>
            </View>
            <View style={styles.section}>
              <Text>Max height {percentage}</Text>
            </View>
          </Page>
       
        </Document>
      )

  }

  export default ReportPdf