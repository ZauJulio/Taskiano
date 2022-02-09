import { async } from "@firebase/util";
import { HistoryController } from "./lib";

describe("HistoryController", () => {
    it("Create new History", async () => {
        const newHistory = await HistoryController.create({
            userId: "",
            score: 666,
            updated_at: new Date(),
            lastTaskNumber: 9,
            weekdayTaskCount: {
                mon: 2,
                tue: 2,
                wed: 2,
                thu: 2,
                fri: 2,
                sat: 2,
                sun: 2
            }
        });

        expect(newHistory).toBeTruthy();

        if (newHistory.id) {
            const checkHistory = await HistoryController.get(newHistory.id);

            expect(checkHistory?.id).toBe(newHistory.id);
        }
    });

    //Teste Update Score
    it("Update Score", async () =>{
        const userId = "";
        const updatedHistory = await HistoryController.update(userId, {
            userId: "",
            score: 669,
            updated_at: new Date(),
            lastTaskNumber: 9,
            weekdayTaskCount: {
                mon: 2,
                tue: 2,
                wed: 2,
                thu: 2,
                fri: 2,
                sat: 2,
                sun: 2
            }
        });

        expect(updatedHistory).toBeTruthy();

        if (updatedHistory?.userId) {
            const checkHistory = await HistoryController.get(updatedHistory.userId);
            expect(checkHistory?.score).toBe(updatedHistory.score);
        }
    });

    //Teste Update Last Task Number
    it("Update Last Task Number", async () => {
        const userId = "";
        const updatedHistory = await HistoryController.update(userId, {
            userId: "",
            score: 699,
            updated_at: new Date(),
            lastTaskNumber: 10,
            weekdayTaskCount: {
                mon: 2,
                tue: 2,
                wed: 2,
                thu: 2,
                fri: 2,
                sat: 2,
                sun: 2
            }
        });
    })
})