class assess1Page {

//    LE241140P[new]
//  LDA10086P [mechanical]
//  PG364717P/NH008233P seems failing and mechanical is coming again n again
//  PG077644P seems failing and mechanical is coming again n again
//  NG149142P   Assessment-DONE. Mechanical Advising-DONE.  Approval-DONE.  Mechanical-DONE.    Recon Package[APPROVE DID NOT APPEARED]
//  L9253535    TO RUN THIS USING COMMAND LINE TO GET VIDEO
//  PG168835A   another case
//  P7201169A
//  NW224224P
//  P7190858P
//  PG348237P   Completed till glass and sent to rafey sir
//  PG170370Q one go multiple login     required an tool to submit
//  PG371194A one go multiple login
//  PG369093B will do till approve. to check mechanical assessment
//  PG366675A check again for all after increasing time
//  PG366675A/MU039269Q used till glass for one go multiple scenario
//  PG362503B used till glass for one go 1 scenario
//  P6254491A   assessment complete
//  PG096592A   assessment complete
//  PG065906P completed
//  LH521307P   To use from starting
//  PE576769A   To use from starting
//  LH521307P showing wrong invoice date time in interior
//  PG334656P starting from first
//  PG334656P
//  L9109743P starting assessment at 10.11 am on 02-03-23. imported just now.
//  J0329061P   starting assessment at 10.11 am on 02-03-23. imported just now.
//  PG353670P READONLY
//  PG176941P SOME WEIRED ISSUE OF ADDER INFO
//  H0X83400Q interior not filled
//  NU102928R to check readonly for int
//  KC574833P to chect blank for dent   MC504834P [COMPLETED]
    stockid = "MC504834P";   //PG168468A to start   MC102940P started assessment PG180466A    assessment in drafts : PG353670Q completed till porter to sales
    emailId = ".fieldWrp";
    password = "[type='password']";
    login = "button:contains('Log')";
    leftArrowIcon = ".arrow-LfIcon";
    stockIdtext = "[type='text']";
    assessment = ".assest-Txt-conts:contains('Assessment')";
    startAssessment = "div.dropdown:nth-child(9) div.dropdown-menu.show ul:nth-child(1) li:nth-child(1) > a.dropdown-item";
    toolsDetail = "#Detail-header";
    quarterRearPassenger = "#QR_RE_PA";
    tailLightRearDriver = "#TL_RE_DR";
    toolsPaint = "#Paint-header";
    bumperRearDriver = "#BU_RE_DR";
    bumperRearPassenger = "#BU_RE_PA";
    bumperFrontDriver = "#BU_FR_DR";        //  "[transform='translate(152.33 31.41)']";
    bumperFrontPassenger = "#BU_FR_PA";     //  "[transform='translate(-1335.991 -1245.769)']";
    luggageRackPassenger = "#LR___PA";
    doorMoldingFrontPassenger = "#DM_FR_PA";
    hoodMetalPainting = "#RO____";
    trunkGateRear = "#TG_RE__";
    doorFrontDriverMP = "#DO_FR_DR";
    gasDoorRearDriver = "#GD_RE_DR";
    pillerRearPassenger = "#PL_RE_PA";
    rockerRearPassenger = "#RK___PA";
    wheelFrontDriverRefinish = "#WL_FR_DR";
    wheelRearDriverRefinish = "#WL_RE_DR";
    wheelFrontPassengerMachinedFinish = "#WL_FR_PA";
    wheelRearPassengerMachinedFinish = "#WL_RE_PA";
    windshieldFront = "#WD_FR__";
    interiorTabAssessment = "#interiorTab";
    seatCushionFrontDriver = "#SC_FR_DR";
    seatCushionFrontPassenger = "#SC_FR_PA";
    carpetCargoPassenger = "#CP_CG_PA";
    doorFrontPassenger = "#DP_FR_DR";
    doorFrontDriver = "#DP_FR_PA";
    assessmentPriceHeadings = "button:nth-child(1).btn.btn-link.collapsed";
    openSummary = "button[title='Summary']";
    reconPartnersImage = "img"
    addMoreWork_MA_MA_FI = ".addMore > a > .fa.fa-plus-circle.fa-custom";
    selectTool = "tr:nth-child(2) td:nth-child(2) [formcontrolname='opCodeId']";
    addMoreWorkApproval_FI = ".addMore button[type='button']";
    selectToolSecond = "tr:nth-child(3) td:nth-child(2) [formcontrolname='opCodeId']";

}

module.exports = new assess1Page();