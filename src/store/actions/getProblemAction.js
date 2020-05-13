export const getProblem = (slug) => {
    var collection_id = slug.slice(0,1)
    var document_id = slug.slice(1,3)
    var problem_id = slug
    // console.log(collection_id, document_id, problem_id)
    var collection = '';
    var document = '';
    switch(collection_id){
        case '1':
            collection = "challenges-NVR"
            break;
        case '2':
            collection = "challenges-QA-DI"
            break;
        case '3':
            collection = "challenges-VR-MA"
            break;
        case '4':
            collection = "challenges-QA-AA"
            break;
        case '5':
            collection = "challenges-VR-LD"
            break;
        default:
            collection = null
    }

    if(collection_id == '1'){
        switch(document_id){
            case '01':
                document = "AnalyticalReasoning";
                break;
            case '02':
                document = "ImageAnalysis";
                break;
            case '03':
                document = "RuleDetection";
                break;
            case '04':
                document = "CubesAndDice";
                break;
            case '05':
                document = "PaperCutting";
                break;
            case '06':
                document = "ShapeConstruction";
                break;
            case '07':
                document = "FigureMatrix";
                break;
            case '08':
                document = "PaperFolding";
                break;
            case '09':
                document = "GroupingOfImages";
                break;
            case '10':
                document = "PatternCompletion";
                break;
            default:
                document = null;
        }
    }
    else if(collection_id == '2'){
        switch(document_id){
            case '01':
                document = "BarCharts";
                break;
            case '02':
                document = "PieCharts";
                break;
            case '03':
                document = "LineCharts";
                break;
            case '04':
                document = "TableCharts";
                break;
            default:
                document = null;
        }
    }
    else if(collection_id == '3'){
        switch(document_id){
            case '01':
                document = "AlphabetTest";
                break;
            case '02':
                document = "CodingAndDecoding";
                break;
            case '03':
                document = "MathematicalOperations";
                break;
            case '04':
                document = "Analogye";
                break;
            case '05':
                document = "DataSufficiencyng";
                break;
            case '06':
                document = "NumberSeries";
                break;
            case '07':
                document = "ArithmeticalReasoning";
                break;
            case '08':
                document = "DirectionSenseTest";
                break;
            case '09':
                document = "NumberRankingAndTimeSequenceTest";
                break;
            case '10':
                document = "AssertionAndReason";
                break;
            case '11':
                document = "InsertingTheMissingCharacter";
                break;
            case '12':
                document = "SequentialOutputTracing";
                break;
            case '13':
                document = "Blood Relations";
                break;
            case '14':
                document = "LogicalSequenceOfWords";
                break;
            case '15':
                document = "SituationReactionTest";
                break; 
            case '16':
                document = "Classification";
                break;
            case '17':
                document = "LogicalVennDiagram";
                break;
            case '18':
                document = "VerificationOfTruthOfTheStatement";
                break;
            default:
                document = null;
        }
        
    }
    else if(collection_id == '4'){
        switch(document_id){
            case '01':
                document = "AlligationOrMixture";
                break;
            case '02':
                document = "Logaritrhms";
                break;
            case '03':
                document = "RacesAndGames";
                break;
            case '04':
                document = "Area";
                break;
            case '05':
                document = "Numbers";
                break;
            case '06':
                document = "RatiosAndProportions";
                break;
            case '07':
                document = "Average";
                break;
            case '08':
                document = "OddManOut";
                break;
            case '09':
                document = "SimpleInterest";
                break;
            case '10':
                document = "BankersDiscount";
                break;
            case '11':
                document = "Partnership";
                break;
            case '12':
                document = "Simplification";
                break;
            case '13':
                document = "BoatsAndStreams";
                break;
            case '14':
                document = "Percentage";
                break;
            case '15':
                document = "SquareRootsAndCubeRoots";
                break;
            case '16':
                document = "Calendar";
                break;
            case '17':
                document = "PermutationsAndCombinations";
                break;
            case '18':
                document = "StocksAndShares";
                break;
            case '19':
                document = "Clocks";
                break;
            case '20':
                document = "PipesAndCistern";
                break;
            case '21':
                document = "TimeAndDistance";
                break;
            case '22':
                document = "CompoundInterest";
                break;
            case '23':
                document = "Probability";
                break;
            case '24':
                document = "TimeAndWork";
                break;
            case '25':
                document = "DecimalFractions";
                break;
            case '26':
                document = "ProblemsOnAges";
                break;
            case '27':
                document = "TrueDiscount";
                break;
            case '28':
                document = "HCFAndLCM";
                break;
            case '29':
                document = "ProblemsOnNumbers";
                break;
            case '30':
                document = "VolumeAndSurfaceArea";
                break;
            case '31':
                document = "HeightAndDistance";
                break;
            case '32':
                document = "ProblemsOnTrains";
                break;
            case '33':
                document = "ProfitAndLoss";
                break;
            default:
                document = null;
        }        
    }
    else if(collection_id == '5'){
        switch(document_id){
            case '01':
                document = "CauseAndEffectReasoning";
                break;
            case '02':
                document = "StatementAndArguments";
                break;
            case '03':
                document = "StatementAndCoursesOfAction";
                break;
            case '04':
                document = "DerivingConclusionsFromPassages";
                break;
            case '05':
                document = "StatementAndAssumptions";
                break;
            case '06':
                document = "Logic";
                break;
            case '07':
                document = "StatementAndConclusions";
                break;
            case '08':
                document = "ThemeDetection";
                break;
            default:
                document = null;
        }        
    }

    return {
        slug: slug,
        collection: collection,
        document: document
    }
}