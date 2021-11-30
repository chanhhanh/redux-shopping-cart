import React from "react";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";

const about = () => {
  return (
    <Box sx={{ Width: 1 }}>
      <Card sx={{ margin: 1 }}>
        <Typography sx={{ margin: 1 }} variant='h5' component='div'>
          Members
        </Typography>
        <Typography sx={{ margin: 1 }} variant='body2'>
          Trần Lê Chánh Hạnh - 4501104069
        </Typography>
        <Typography sx={{ margin: 1 }} variant='body2'>
          Nguyễn Danh Trung - 4501104260
        </Typography>
        <Typography sx={{ margin: 1 }} variant='body2'>
          Huỳnh Mẫn Đạt - 4501104047 
        </Typography>
        <Typography sx={{ margin: 1 }} variant='body2'>
          Trịnh Thị Phương Vi - 4501104276
        </Typography>
      </Card>
    </Box>
  );
};

export default about;
