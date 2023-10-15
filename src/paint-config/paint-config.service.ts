import { Injectable } from '@nestjs/common';
import { CreatePaintConfigDto } from './dto/create-paint-config.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  PaintConfig,
  PaintConfigDocument,
} from './schemas/paint-config.schema';
import { Model } from 'mongoose';

@Injectable()
export class PaintConfigService {
  constructor(
    @InjectModel(PaintConfig.name)
    private PaintConfigModel: Model<PaintConfigDocument>,
  ) {}

  async createPaintConfig(
    createPaintConfigDto: CreatePaintConfigDto,
  ): Promise<PaintConfig> {
    const createdForm = new this.PaintConfigModel(createPaintConfigDto);
    return createdForm.save();
  }

  async findAllPaints(): Promise<PaintConfig[]> {
    return this.PaintConfigModel.find().exec();
  }

  findOnePaintConfig(id: number) {
    return this.PaintConfigModel.find({
      paintId: id,
    });
  }

  updateStatePaintConfig(updatePaintConfigDto: {
    id: number;
    paintState: boolean;
  }) {
    return this.PaintConfigModel.updateOne(
      {
        paintId: updatePaintConfigDto.id,
      },
      {
        $set: {
          isPaintPaused: updatePaintConfigDto.paintState,
        },
      },
    );
  }

  async findLastPaintByUserId(userId: number): Promise<PaintConfig | null> {
    try {
      const lastPaint = await this.PaintConfigModel.findOne({ userId }).sort({
        paintId: 1,
      }); // Ordena pelo paintId em ordem decrescente
      // .exec();

      return lastPaint || null;
    } catch (error) {
      console.error('Erro ao encontrar a última pintura:', error);
      throw error;
    }
  }

  // update(id: number, updatePaintConfigDto: UpdatePaintConfigDto) {
  //   return `This action updates a #${id} paintConfig`;
  // }

  removePaintConfig(id: number) {
    return this.PaintConfigModel.findOneAndRemove({
      _id: id,
    }).exec();
  }
}
