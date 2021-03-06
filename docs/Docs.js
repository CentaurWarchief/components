import React from 'react';
import './Docs.less';

import Header from './Header';
import StepperDocs from './StepperDocs';
import SelectDocs from './SelectDocs';
import TooltipDocs from './TooltipDocs';
import CheckboxDocs from './CheckboxDocs';
import RadioDocs from './RadioDocs';
import LoaderDocs from './LoaderDocs';
import FlowNavigationDocs from './FlowNavigationDocs';

const Docs = () => (
  <div>
    <Header />

    <StepperDocs />
    <FlowNavigationDocs />
    <SelectDocs />
    <TooltipDocs />
    <CheckboxDocs />
    <RadioDocs />
    <LoaderDocs />
  </div>
);

export default Docs;
