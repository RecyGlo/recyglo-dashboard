import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CarbonReport from './Components/CarbonReport';

const Organizations = () => (
  <Container className="dashboard">
    <div className="carbon-bg">
      <Row>
        <Col md={6}>
          <h2>Carbon Emission Report</h2>
          <h4>Executive Summary</h4>
          <p className="paragraph">
            <span>Recyglo</span>
                  , a leading waste management platform, is
                  dedicated to revolutionizing the waste management landscape by
                  providing sustainable and efficient solutions. As part of its
                  commitment to environmental sustainability,
            <span>Recyglo</span>
            {' '}
                  has
                  initiated a comprehensive assessment of the greenhouse gas (GHG)
                  emissions associated with its waste management services. The primary
                  purpose of this GHG emission report is to quantify the GHG savings
                  achieved by recycling and composting waste through
            {' '}
            <span>Recyglo&apos;s</span>
            {' '}
                  platform over a specified period.
            <br />
            <br />
                  By utilizing the Environmental Protection Agency (EPA) GHG
                  simulation provided by the Institute for Global Environmental
                  Strategies (IGES),
            {' '}
            <span>Recyglo</span>
            {' '}
                  aims to provide transparent
                  and actionable insights into its environmental impact.
          </p>
        </Col>
        <Col md={6}>
          <iframe
            src="https://ourworldindata.org/grapher/annual-co2-emissions-per-country?country=~OWID_WRL"
            width="90%"
            title="CO2 Emissions Chart"
            height="500px"
            frameBorder="0"
          />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={6}>
          <iframe
            src="https://ourworldindata.org/grapher/co-emissions-per-capita"
            height="500px"
            frameBorder="0"
            width="90%"
            title="CO2 Emissions Map"
            style={{ marginLeft: '10px' }}
          />
        </Col>
        <Col md={6}>
          <h2>Methodologies</h2>
          <p className="paragraph2">
                        The GHG emission assessment within this report is conducted using
                        the following methodologies:
          </p>
          <br />
          <ul>
            <li>
                            EPA GHG Simulation: Recyglo employs the EPA GHG simulation, a
                            well-established and widely recognized tool, to calculate direct
                            emissions from the various stages of waste recycling. This
                            simulation considers factors such as transportation, energy
                            consumption, and waste processing methods to estimate emissions.
            </li>
            <li>
                            IGES&apos;s Simulator to Quantify the Emission Factor: Recyglo
                            utilizes the GHG emission quantifying simulation tool from the
                            Institute for Global Environmental Strategies (IGES), an esteemed
                            research organization specializing in environmental
                            sustainability. IGES provides expertise and oversight to ensure
                            the accuracy and reliability of the GHG assessment.
            </li>
            <li>
                            Direct Emission Calculation: The report quantifies GHG emissions
                            directly associated with the recycling process, ensuring a
                            comprehensive evaluation of the environmental impact of waste
                            management.
            </li>
            <li>
                            Emission Savings Calculation: It calculates the GHG emissions
                            saved by diverting waste from landfills through recycling and
                            composting activities enabled by Recyglo&apos;s platform.
            </li>
          </ul>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={6}>
          <h4>Key Insights</h4>
          <p className="paragraph">
                        This GHG emission report not only measures the environmental impact
                        of waste management but also underscores the critical role of
                        recycling and composting in reducing GHG emissions. Preliminary
                        findings indicate a significant reduction in net GHG emissions
                        through Recyglo&apos;s services, aligning with the
                        organization&apos;s commitment to sustainability and contributing to
                        global climate mitigation efforts.
          </p>
          <p className="paragraph">
            <span>GHG Emission Reduction Measurement</span>
                        : The report
                        calculates GHG emissions resulting directly from waste recycling,
                        including transportation, processing, and disposal. Additionally, it
                        quantifies the GHG emissions saved through waste recycling and
                        composting practices facilitated by Recyglo&apos;s platform.
          </p>
          <p className="paragraph">
            <span>Net GHG Emissions</span>
                        : By subtracting the GHG emissions
                        saved through recycling from the direct emissions, the report
                        provides a clear assessment of the net GHG emissions associated with
                        waste management through Recyglo&apos;s services.
          </p>
        </Col>
        <Col md={6}>
          <iframe
            src="https://ourworldindata.org/grapher/annual-co-emissions-by-region"
            height="70%"
            frameBorder="0"
            width="90%"
            title="CO2 Emissions Map"
          />
          <h2>Disclaimer</h2>
          <p className="paragraph2">
                        The emission calculation in this report is calculated for recycling
                        of waste as follows:
          </p>
          <ul>
            <li>(A) GHG emissions from recycling</li>
            <li>
                            (B) Avoided GHG emissions from the equivalent amount of materials
                            production from virgin processes
            </li>
            <li>(C) Avoided GHG emissions from landfilling</li>
            <li>(D) Net GHG emissions (D) = (A) - (B) - (C)</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <CarbonReport />
      </Row>
    </div>
  </Container>
);

export default Organizations;
