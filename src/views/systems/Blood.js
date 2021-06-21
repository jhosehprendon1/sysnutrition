import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Blood = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(RoutesLiterals.toolbox)
  }

  return (
    <div className="container-center">
      <h3>Sangre Azucar/Insulina</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card">
          <p style={{textAlign: 'center', fontWeight: "bold"}}>Síntomas</p>
          <p>Signs of brain inflammation include brain fog, problems with concentration and focus, mood problems like anxiety and/or depression, and memory issues. Long-term brain inflammation may be a risk factor for cognitive impairment and eventually dementia, as well as for autoimmune disease or other neurological conditions like Parkinson’s, especially in genetically susceptible people.</p>
        </div>
        <div className="systems-card">
          <p style={{textAlign: 'center', fontWeight: "bold"}}>Suplementos/Super Alimentos</p>
          <p>1 - Wild-caught fish, because of its high concentration of brain-boosting docosahexaenoic acid (DHA), an omega-3 fatty acid.</p>
          <p>2 - MCT oil: its bioavailable fats, extracted from coconut and palm oil, have been shown to improve cognitive function.</p>
          <p>3 - Lion’s mane mushroom, which contains nerve growth factors (NGFs) to help regenerate and protect brain tissue.</p>
          <p>4 - Mucuna pruriens, an Ayurvedic herb that supports the central and peripheral nervous systems, helping the body to adapt to stress. It is rich in L-dopa, the precursor to the neurotransmitter dopamine.</p>
          <p>5 - Krill oil is even better than fish oil, containing 50 times more of the powerful antioxidant astaxanthin than most fish oil brands. Krill oil also contains the beneficial phospholipids called phosphatidylcholine and phosphatidylserine, which the body uses to support brain and nerve function.</p>
          <p>6 - Magnesium supports the brain receptors for learning and memory function, increasing neuroplasticity and mental clarity. Deficiencies have been linked to brain problems such as anxiety, depression, ADHD, migraines, and brain fog. Magnesium glycinate and magnesium threonate are two of the most absorbable forms that are conducive to calming anxiety and improving cognitive function (respectively).</p>
          <p>7 - Aerobic exercise enhances the production of BDNF (brain-derived neurotrophic factor), boosting memory and overall cognitive function. Try to get at least 30 minutes six days per week.</p>
          <p>8 - Valerian root, which contains valerenic acid, a substance that modulates the neurotransmitter GABA. Brain-derived neurotrophic factor (BDNF) is a protein that helps the growth and function of neurons. Healthy GABA levels are necessary for increasing BDNF, which is important because low BDNF levels are associated with impaired memory and Alzheimer’s.</p>
        </div>
      </div>
    </div>
  )
};

export default Blood;