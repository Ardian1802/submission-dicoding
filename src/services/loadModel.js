import tf from '@tensorflow/tfjs-node'
import 'dotenv/config'

export const loadModel = async () => {
    return tf.loadGraphModel('https://storage.googleapis.com/tedi_bucket-1/model.json');
}
